# AUTO GENERATED FILE - DO NOT EDIT

export 'dam'_toggle

"""
    'dam'_toggle(;kwargs...)
    'dam'_toggle(children::Any;kwargs...)
    'dam'_toggle(children_maker::Function;kwargs...)


A Toggle component.
ChatWindow displays a resizable chat interface with scroll tracking and message submission.

@component
@param {Object} props - Component props.
@param {Function} props.setProps - Dash callback for updating props.
@param {boolean} props.isVisible - Indicates if the chat window is visible.
@param {Function} props.children - Child component to display when the toggle is active.
@returns {JSX.Element} Rendered ChatWindow component.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Child component to display when the toggle is active.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `isVisible` (Bool; optional): Indicates of a toggle is visible (True) or closed (False).
"""
function 'dam'_toggle(; kwargs...)
        available_props = Symbol[:children, :id, :isVisible]
        wild_props = Symbol[]
        return Component("'dam'_toggle", "Toggle", "dash_ai_messenger", available_props, wild_props; kwargs...)
end

'dam'_toggle(children::Any; kwargs...) = 'dam'_toggle(;kwargs..., children = children)
'dam'_toggle(children_maker::Function; kwargs...) = 'dam'_toggle(children_maker(); kwargs...)

