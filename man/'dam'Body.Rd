% Auto-generated: do not edit by hand
\name{'dam'Body}

\alias{'dam'Body}

\title{Body component}

\description{
Body displays chat messages and autoscrolls to the latest message. This scroll information is kept in local storage.  @component @param {Object} props - Component props. @returns {JSX.Element} Rendered ChatWindow component.
}

\usage{
'dam'Body(children=NULL, id=NULL, displayEnd=NULL, displayStart=NULL,
messages=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Child component to display in the footer.}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{displayEnd}{Character. End indicator of text to be displayed in the chat window.}

\item{displayStart}{Character. Start indicator of text to be displayed in the chat window.}

\item{messages}{List of lists containing elements 'role', 'content'.
those elements have the following types:
  - role (character; required)
  - content (character; required)s. Open AI messages to be displayed in the chat window.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

