# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class ResizableWindow(Component):
    """A ResizableWindow component.
ResizableWindow displays a resizable container for chat content.

@component
@param {Object} props - Component props.
@param {string} props.id - The ID used to identify this component in Dash callbacks.
@param {Function} props.setProps - Dash-assigned callback to report property changes.
@returns {JSX.Element} A resizable chat container.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Child component to display in the footer.

- id (string; optional):
    The ID used to identify this component in Dash callbacks."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_ai_messenger'
    _type = 'ResizableWindow'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(ResizableWindow, self).__init__(children=children, **args)

setattr(ResizableWindow, "__init__", _explicitize_args(ResizableWindow.__init__))
