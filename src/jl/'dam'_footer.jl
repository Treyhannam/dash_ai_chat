# AUTO GENERATED FILE - DO NOT EDIT

export 'dam'_footer

"""
    'dam'_footer(;kwargs...)
    'dam'_footer(children::Any;kwargs...)
    'dam'_footer(children_maker::Function;kwargs...)


A Footer component.
Footer displays a resizable chat interface with scroll tracking and message submission.

@component
@param {Object} props - Component props.
@returns {JSX.Element} Rendered Footer component.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Child component to display in the footer.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `message` (String; optional): Message submitted by the user.
"""
function 'dam'_footer(; kwargs...)
        available_props = Symbol[:children, :id, :message]
        wild_props = Symbol[]
        return Component("'dam'_footer", "Footer", "dash_ai_messenger", available_props, wild_props; kwargs...)
end

'dam'_footer(children::Any; kwargs...) = 'dam'_footer(;kwargs..., children = children)
'dam'_footer(children_maker::Function; kwargs...) = 'dam'_footer(children_maker(); kwargs...)

