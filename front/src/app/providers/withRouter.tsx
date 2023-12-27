import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {Loader} from "../../shared";

export const withRouter = (component: () => React.ReactNode) => () => (
        <BrowserRouter>
            <Suspense fallback={
                <div style={{height: '100vh'}}>
                    <Loader/>
                </div>}>
                {component()}
            </Suspense>
        </BrowserRouter>
);
