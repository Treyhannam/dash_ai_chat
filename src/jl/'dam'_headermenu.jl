# AUTO GENERATED FILE - DO NOT EDIT

export 'dam'_headermenu

"""
    'dam'_headermenu(;kwargs...)

A HeaderMenu component.
MenuHeader element to display in a chat, adds icon for resizing the window and user options such as resetting the chat

@component
@returns {JSX.Element} Rendered ChatWindow component.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `headerText` (String; optional): What text to display in the header.
- `resetClicked` (Bool; optional): If the reset button was clicked or not
"""
function 'dam'_headermenu(; kwargs...)
        available_props = Symbol[:id, :headerText, :resetClicked]
        wild_props = Symbol[]
        return Component("'dam'_headermenu", "HeaderMenu", "dash_ai_messenger", available_props, wild_props; kwargs...)
end

