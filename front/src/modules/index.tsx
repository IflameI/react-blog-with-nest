import {Route, Routes, useLocation} from "react-router-dom";
import React, {lazy} from "react";

const NotFoundPage = lazy(() => import("./404"));


export type RouterType = {
    title: string,
    path: string,
    children: React.ReactNode,
}

interface IRouting {
    router: RouterType[]
}

export const Routing: React.FC<IRouting> = ({router}) => {
    const location = useLocation();


    return (
            <Routes>
                {router.map(({path, children}) => {
                    return <Route key={path} path={path} element={children}/>;
                })}
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
    );
};
