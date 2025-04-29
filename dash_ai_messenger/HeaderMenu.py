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


class HeaderMenu(Component):
    """A HeaderMenu component.
MenuHeader element to display in a chat, adds icon for resizing the window and user options such as resetting the chat

@component
@returns {JSX.Element} Rendered ChatWindow component.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- headerText (string; optional):
    What text to display in the header.

- resetClicked (boolean; default False):
    If the reset button was clicked or not."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_ai_messenger'
    _type = 'HeaderMenu'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        headerText: typing.Optional[str] = None,
        resetClicked: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'headerText', 'resetClicked']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'headerText', 'resetClicked']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(HeaderMenu, self).__init__(**args)

setattr(HeaderMenu, "__init__", _explicitize_args(HeaderMenu.__init__))
