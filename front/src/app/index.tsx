import {withProviders} from "./providers";
import React from "react";
import {router} from "./routes/model";
import {Routing} from "../modules";

const App = () => {
    return (
            <Routing router={router}/>
    )
}

export default withProviders(App)
