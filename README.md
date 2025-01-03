# FiveM Svelte Boilerplate (Lua)

A modern, TypeScript-ready boilerplate for FiveM NUI development using Svelte and Lua. Features built-in visibility management, NUI focus handling, and development tools.

## Features

- **Svelte + TypeScript** - Modern frontend development
- **Hot Module Replacement** - Quick development iterations
- **Type Safety** - Full TypeScript support for NUI messages
- **CSS Ready** - Includes basic styling setup
- **NUI Communication** - Built-in type-safe message handling
- **Visibility Management** - Built-in state management for UI visibility

## Getting Started

1. Clone this repository into your resources folder:
```bash
cd resources
git clone https://your-repository/fivem-svelte-boilerplate-lua
```

2. Install dependencies:
```bash
cd fivem-svelte-boilerplate-lua/web/
npm install
```

3. Start development server:
```bash
npm run dev
```
or have an auto updating production build via -watch
```bash
npm run start:game
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
fivem-svelte-boilerplate-lua/
├── web/                   # Web-related files
│   ├── build/            # Production build output
│   ├── node_modules/     # Node.js dependencies
│   ├── public/           # Static assets
│   └── src/              # Source code
│       ├── lib/          # Utility libraries
│       │   ├── nuiFetch.ts    # NUI fetch utilities
│       │   ├── nuiListen.ts   # NUI event listeners
│       │   └── nuiVisibility.ts # Visibility management
│       ├── app.css       # Global styles
│       ├── App.svelte    # Main Svelte component
│       └── main.ts       # Application entry point
├── client/
│   └── client.lua        # Client-side Lua scripts
├── fxmanifest.lua       # FiveM resource manifest
├── package.json         # Node.js dependencies and scripts
├── svelte.config.js     # Svelte configuration
├── tsconfig.json        # TypeScript configuration
```

## Usage

### Client-Side Example Commands 

The boilerplate comes with two built-in example commands:

1. Toggle UI visibility:
```lua
/toggleNui
```

2. Update counter value:
```lua
/updateCount [number]
```

### NUI Communication

#### Sending Messages to Client

```typescript
// Send data to Lua client
await nuiFetch("eventName", { 
  // your data here 
});
```

#### Receiving Messages from Client

```typescript
// Listen for messages from Lua client
const cleanup = onNuiMessage<YourDataType>("eventName", (data) => {
  // handle the data
});
```

#### Managing Visibility

The boilerplate includes a visibility store that handles UI state:

```typescript
// In your Svelte component
import { visibility, setVisible } from "./lib/nuiVisibility";

// Read visibility state
$: isVisible = $visibility;

// Update visibility
await setVisible(true); // or false
```

### Lua Event Handlers

Add new NUI callbacks in `client.lua`:

```lua
RegisterNUICallback('eventName', function(data, cb)
    -- Handle the event
    cb({ status = 'ok' })
end)
```

Send messages to NUI:

```lua
SendNUIMessage({
    type = "eventName",
    data = {
        -- your data here
    }
})
```

## Development

The boilerplate includes development utilities:

- Mock NUI events during development
- Hot module replacement for quick iterations
- TypeScript support for better development experience

During development, you can either:
- Use `npm run dev` for hot-reload development server via browser
- Use `npm run start:game` for auto-updating production build with -watch flag

## Building for Production

1. Build the UI:
```bash
npm run build
```

2. Package your resource:
   - The build output will be in the `web/build` directory
   - All necessary files are already configured in `fxmanifest.lua`
   - Test the build in a production environment

## License

MIT License - Feel free to use this boilerplate for your FiveM projects!