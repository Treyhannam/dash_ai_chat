# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'dam'Footer <- function(children=NULL, id=NULL, disableInput=NULL, disableSubmit=NULL, message=NULL) {
    
    props <- list(children=children, id=id, disableInput=disableInput, disableSubmit=disableSubmit, message=message)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Footer',
        namespace = 'dash_ai_messenger',
        propNames = c('children', 'id', 'disableInput', 'disableSubmit', 'message'),
        package = 'dashAiMessenger'
        )

    structure(component, class = c('dash_component', 'list'))
}
