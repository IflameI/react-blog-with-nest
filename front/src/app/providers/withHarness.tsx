import React from 'react';
import Header from "../ui/Header";


export const withHarness = (component: () => React.ReactNode) => () => {

	return (
		<>
			<Header/>
			<div>
				{component()}
			</div>
		</>
	);
};

