import {RouterType} from "../../../modules";
import loadable, {DefaultComponent, LoadableComponent,} from "@loadable/component";

const Loader = () => <div>Loading...</div>;

const Loadable = <TProps, >(
        loadFn: (props: TProps) => Promise<DefaultComponent<TProps>>
): LoadableComponent<TProps> =>
        loadable(loadFn, {fallback: <Loader/>});

const Articles = Loadable(() => import("../../../modules/articles"))
const LoginPage = Loadable(() => import("../../../modules/login"))
const RegisterPage = Loadable(() => import("../../../modules/register"))
const Article = Loadable(() => import("../../../modules/article"))

export enum RoutesLabelEnum {
    Articles = 'Главная',
    Register = 'Регистрация',
    Login = 'Авторизация',
    Article = 'Статья'
}

export enum RoutesLinkEnum {
    Articles = '/*',
    Register = '/register/*',
    Login = '/login/*',
    Article = '/article/:id',
    CreateArticle = '/create/article',
}

export const router: RouterType[] = [
    {
        title: RoutesLabelEnum.Articles,
        path: RoutesLinkEnum.Articles,
        children: <Articles/>
    },
    {
        title: RoutesLabelEnum.Login,
        path: RoutesLinkEnum.Login,
        children: <LoginPage/>
    },
    {
        title: RoutesLabelEnum.Register,
        path: RoutesLinkEnum.Register,
        children: <RegisterPage/>
    },
    {
        title: RoutesLabelEnum.Article,
        path: RoutesLinkEnum.Article,
        children: <Article/>
    },
];
