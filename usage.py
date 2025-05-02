import dash_ai_messenger as dam
from dash import Dash, callback, html, Input, Output, dcc
import textwrap
import dash_bootstrap_components as dbc
import time

app = Dash(__name__)

buttons = html.Div(
    [
        dbc.Button("Regular", color="primary", className="me-1"),
        dbc.Button("Active", color="primary", active=True, className="me-1"),
    ],
    style={"alignSelf": "flexStart", "marginLeft": "10px"},
)

app.layout = html.Div(
    [
        html.Div(id='output'),
        html.Div(id='output2'),
        dbc.Textarea(
            id='default',
            value='Hello',
            submit_on_enter =True,
            n_submit=0
        ),
        dam.ResizableWindow(children=[html.Div('Hello')]),
        dam.Toggle(
            id='toggle',
            isVisible=True,
            children=dam.ResizableWindow(
                children=html.Div(
                    children=[
                        dam.HeaderMenu(
                            id='header',
                            headerText='Solo Bolo'
                        ),
                        dam.Body(
                            id='messagebody',
                            displayStart="<begin>",
                            displayEnd="<end>",
                            messages=[{"role": "assistant", "content": textwrap.dedent("""
1. Install npm packages
    ```bash
    $ npm install
    ```

Recipiants: ```python user@gmail.com```
                                       
Subject:
                                                                                       
```python
import main
Lets Review this
```
                                       
```Email Body
Hello, I am a bot that will help you review your code. I will ask you questions and you will answer them. I will then give you feedback on
```

A table:

| a | b |
| - | - |

~~strikethrough~~                       
""")}],
                        ),
                        dam.Footer(
                            id='messagefooter',
                            children=buttons,
                            disableInput=False
                        ),
                    ]
                    )
                ),
        ),
    ]
)


@callback(Output('output', 'children'), Input('default', 'value'))
def display_output(value):
    return 'You have entered {}'.format(value)


@callback(Output('output2', 'children'), Input('toggle', 'isVisible'))
def display_output2(is_visible):
    return f'Is toggle active? {is_visible}'


@callback(
    Output('messagebody', 'messages'),
    Output('header', 'resetClicked'),
    Input('messagefooter', 'message'),
    Input('messagebody', 'messages'),
    Input('header', 'resetClicked')
)
def track_history(message, messages, resetClicked):
    print(message, messages, resetClicked)
    if resetClicked == True:
        messages = []

        return messages, False

    elif message != None:
        messages.append({"role": "user", "content": message})


        return messages, False
    
    else:
        return messages, False


if __name__ == '__main__':
    app.run(debug=True)
