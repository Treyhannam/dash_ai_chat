# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'dam'Footer <- function(children=NULL, id=NULL, message=NULL) {
    
    props <- list(children=children, id=id, message=message)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Footer',
        namespace = 'dash_ai_messenger',
        propNames = c('children', 'id', 'message'),
        package = 'dashAiMessenger'
        )

    structure(component, class = c('dash_component', 'list'))
}
