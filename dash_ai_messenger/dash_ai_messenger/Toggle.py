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


class Toggle(Component):
    """A Toggle component.
ChatWindow displays a resizable chat interface with scroll tracking and message submission.

@component
@param {Object} props - Component props.
@param {Function} props.setProps - Dash callback for updating props.
@param {boolean} props.isVisible - Indicates if the chat window is visible.
@param {Function} props.children - Child component to display when the toggle is active.
@returns {JSX.Element} Rendered ChatWindow component.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Child component to display when the toggle is active.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- isVisible (boolean; optional):
    Indicates of a toggle is visible (True) or closed (False)."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_ai_messenger'
    _type = 'Toggle'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        isVisible: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'isVisible']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'isVisible']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Toggle, self).__init__(children=children, **args)

setattr(Toggle, "__init__", _explicitize_args(Toggle.__init__))
