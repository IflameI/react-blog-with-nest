import React, {FC} from "react";
import {Route, Routes} from 'react-router-dom';
import {RoutesLinkEnum} from "../../app/routes/model";
import {RootPage} from "./RootPage";
import {ArticleImage} from "../../entities/articleImage";


const Articles: FC = () => (
        <Routes>
            <Route path={RoutesLinkEnum.Articles} element={<RootPage/>}/>
            <Route path={RoutesLinkEnum.CreateArticle} element={<ArticleImage/>}/>
        </Routes>
);


export default Articles;
