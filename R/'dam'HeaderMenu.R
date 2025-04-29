# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'dam'HeaderMenu <- function(id=NULL, headerText=NULL, resetClicked=NULL) {
    
    props <- list(id=id, headerText=headerText, resetClicked=resetClicked)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'HeaderMenu',
        namespace = 'dash_ai_messenger',
        propNames = c('id', 'headerText', 'resetClicked'),
        package = 'dashAiMessenger'
        )

    structure(component, class = c('dash_component', 'list'))
}
