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


class Body(Component):
    """A Body component.
Body displays chat messages and autoscrolls to the latest message. This scroll information is kept in local storage.

@component
@param {Object} props - Component props.
@returns {JSX.Element} Rendered ChatWindow component.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Child component to display in the footer.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- messages (list of dicts; optional):
    Open AI messages to be displayed in the chat window.

    `messages` is a list of dicts with keys:

    - role (string; required)

    - content (string; required)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_ai_messenger'
    _type = 'Body'
    Messages = TypedDict(
        "Messages",
            {
            "role": str,
            "content": str
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        messages: typing.Optional[typing.Sequence["Messages"]] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'messages']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'messages']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Body, self).__init__(children=children, **args)

setattr(Body, "__init__", _explicitize_args(Body.__init__))
