
module DashAiMessenger
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/'dam'_body.jl")
include("jl/'dam'_dashaimessenger.jl")
include("jl/'dam'_footer.jl")
include("jl/'dam'_headermenu.jl")
include("jl/'dam'_resizablewindow.jl")
include("jl/'dam'_toggle.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_ai_messenger",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_ai_messenger.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_ai_messenger.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
