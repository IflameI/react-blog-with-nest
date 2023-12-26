import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => (
	<BrowserRouter>
		<Suspense fallback={
			<div style={{height: '100vh'}}>
				loading..
			</div>}>
			{component()}
		</Suspense>
	</BrowserRouter>
);
