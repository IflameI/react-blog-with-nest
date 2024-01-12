import React from 'react';
import Header from "../ui/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const withHarness = (component: () => React.ReactNode) => () => {

    return (
            <>
                <Header/>
                <div>
                    {component()}
                </div>
                <ToastContainer/>
            </>
    );
};

