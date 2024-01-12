import React from "react";
import {HeadlineNews} from "../../widgets/headlineNews";
import {Stories} from "../../widgets/stories";
import {TheBestArticles} from "../../widgets/bestArticles";

export const RootPage: React.FC = () => {
    return (
            <>
                <HeadlineNews/>
                <Stories/>
                <TheBestArticles/>
            </>
    );
};

