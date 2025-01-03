interface NuiMessage<T = unknown> {
  type: string;
  data: T;
}

export function onNuiMessage<T = unknown>(
  type: string,
  callback: (data: T) => void
): () => void {
  const listener = (event: MessageEvent<NuiMessage<T>>) => {
    const { type: messageType, data } = event.data;

    if (messageType === type) {
      callback(data);
    }
  };

  window.addEventListener("message", listener);

  // Return cleanup function
  return () => window.removeEventListener("message", listener);
}
