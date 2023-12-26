import React from "react";
import {Stories} from "../../widgets/stories";
import {TheBestArticles} from "../../widgets/bestArticles";
import {HeadlineNews} from "../../widgets/headlineNews";

const MainPage: React.FC = () => {
    return (
            <>
                <HeadlineNews/>
                <Stories/>
                <TheBestArticles/>
            </>
    );
};

export default MainPage;
