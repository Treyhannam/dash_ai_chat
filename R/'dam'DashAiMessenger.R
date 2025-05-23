# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'dam'DashAiMessenger <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashAiMessenger',
        namespace = 'dash_ai_messenger',
        propNames = c('id', 'label', 'value'),
        package = 'dashAiMessenger'
        )

    structure(component, class = c('dash_component', 'list'))
}
