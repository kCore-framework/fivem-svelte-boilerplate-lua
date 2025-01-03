RegisterNUICallback('print', function(data, cb)
    print(data.text)
    cb({ status = 'ok' })
end)

RegisterNUICallback('setVisible', function(data, cb)
    SetNuiFocus(data.visible, data.visible)
    cb({ status = 'ok' })
end)

RegisterCommand("updateCount", function(source, args)
    SendNUIMessage({
        type = "updateCount",
        data = {
            count = tonumber(args[1])
        }
    })
end)

local toggle = false
RegisterCommand("toggleNui", function(source, args)
    toggle = not toggle
    SendNUIMessage({
        type = "setVisible",
        data = {
            visible = toggle
        }
    })
    SetNuiFocus(toggle, toggle)
end)