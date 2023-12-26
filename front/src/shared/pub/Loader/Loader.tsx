import React from 'react';

export const Loader: React.FC = () => {
    return (
            <div className='loader-wrapper'>
                <div className='lds-spinner'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
    );
};

