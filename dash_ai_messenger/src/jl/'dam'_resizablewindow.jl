# AUTO GENERATED FILE - DO NOT EDIT

export 'dam'_resizablewindow

"""
    'dam'_resizablewindow(;kwargs...)
    'dam'_resizablewindow(children::Any;kwargs...)
    'dam'_resizablewindow(children_maker::Function;kwargs...)


A ResizableWindow component.
ResizableWindow displays a resizable container for chat content.

@component
@param {Object} props - Component props.
@param {string} props.id - The ID used to identify this component in Dash callbacks.
@param {Function} props.setProps - Dash-assigned callback to report property changes.
@returns {JSX.Element} A resizable chat container.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Child component to display in the footer.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
"""
function 'dam'_resizablewindow(; kwargs...)
        available_props = Symbol[:children, :id]
        wild_props = Symbol[]
        return Component("'dam'_resizablewindow", "ResizableWindow", "dash_ai_messenger", available_props, wild_props; kwargs...)
end

'dam'_resizablewindow(children::Any; kwargs...) = 'dam'_resizablewindow(;kwargs..., children = children)
'dam'_resizablewindow(children_maker::Function; kwargs...) = 'dam'_resizablewindow(children_maker(); kwargs...)

