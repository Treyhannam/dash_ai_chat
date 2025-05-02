# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'dam'Body <- function(children=NULL, id=NULL, displayEnd=NULL, displayStart=NULL, messages=NULL) {
    
    props <- list(children=children, id=id, displayEnd=displayEnd, displayStart=displayStart, messages=messages)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Body',
        namespace = 'dash_ai_messenger',
        propNames = c('children', 'id', 'displayEnd', 'displayStart', 'messages'),
        package = 'dashAiMessenger'
        )

    structure(component, class = c('dash_component', 'list'))
}
