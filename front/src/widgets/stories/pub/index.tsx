import React from "react";
import {LastStories, TopStories} from "../ui";

export const Stories: React.FC = () => {
    return (
            <section className='stories'>
                <div className='stories__row'>
                    <TopStories/>
                    <LastStories/>
                </div>
            </section>
    );
};

