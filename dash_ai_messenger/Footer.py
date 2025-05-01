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


class Footer(Component):
    """A Footer component.
Footer displays a resizable chat interface with scroll tracking and message submission.

@component
@param {Object} props - Component props.
@returns {JSX.Element} Rendered Footer component.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Child component to display in the footer.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- disableInput (boolean; optional):
    True to disable the text input.

- disableSubmit (boolean; optional):
    True to disable the submit button.

- message (string; optional):
    Message submitted by the user."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_ai_messenger'
    _type = 'Footer'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        message: typing.Optional[str] = None,
        disableInput: typing.Optional[bool] = None,
        disableSubmit: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'disableInput', 'disableSubmit', 'message']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'disableInput', 'disableSubmit', 'message']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Footer, self).__init__(children=children, **args)

setattr(Footer, "__init__", _explicitize_args(Footer.__init__))
