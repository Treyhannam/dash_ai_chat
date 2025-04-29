# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'dam'ResizableWindow <- function(children=NULL, id=NULL) {
    
    props <- list(children=children, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ResizableWindow',
        namespace = 'dash_ai_messenger',
        propNames = c('children', 'id'),
        package = 'dashAiMessenger'
        )

    structure(component, class = c('dash_component', 'list'))
}
