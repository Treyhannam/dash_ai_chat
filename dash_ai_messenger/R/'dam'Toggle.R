# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'dam'Toggle <- function(children=NULL, id=NULL, isVisible=NULL) {
    
    props <- list(children=children, id=id, isVisible=isVisible)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Toggle',
        namespace = 'dash_ai_messenger',
        propNames = c('children', 'id', 'isVisible'),
        package = 'dashAiMessenger'
        )

    structure(component, class = c('dash_component', 'list'))
}
