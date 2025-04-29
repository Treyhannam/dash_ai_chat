# AUTO GENERATED FILE - DO NOT EDIT

export 'dam'_body

"""
    'dam'_body(;kwargs...)
    'dam'_body(children::Any;kwargs...)
    'dam'_body(children_maker::Function;kwargs...)


A Body component.
Body displays chat messages and autoscrolls to the latest message. This scroll information is kept in local storage.

@component
@param {Object} props - Component props.
@returns {JSX.Element} Rendered ChatWindow component.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Child component to display in the footer.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `messages` (optional): Open AI messages to be displayed in the chat window.. messages has the following type: Array of lists containing elements 'role', 'content'.
Those elements have the following types:
  - `role` (String; required)
  - `content` (String; required)s
"""
function 'dam'_body(; kwargs...)
        available_props = Symbol[:children, :id, :messages]
        wild_props = Symbol[]
        return Component("'dam'_body", "Body", "dash_ai_messenger", available_props, wild_props; kwargs...)
end

'dam'_body(children::Any; kwargs...) = 'dam'_body(;kwargs..., children = children)
'dam'_body(children_maker::Function; kwargs...) = 'dam'_body(children_maker(); kwargs...)

