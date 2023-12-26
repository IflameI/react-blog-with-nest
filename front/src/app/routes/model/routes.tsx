import {RouterType} from "../../../modules";
import loadable, {DefaultComponent, LoadableComponent,} from "@loadable/component";

const Loader = () => <div>Loading...</div>;

const Loadable = <TProps, >(
        loadFn: (props: TProps) => Promise<DefaultComponent<TProps>>
): LoadableComponent<TProps> =>
        loadable(loadFn, {fallback: <Loader/>});

const MainPage = Loadable(() => import("../../../modules/mainPage"))
const LoginPage = Loadable(() => import("../../../modules/login"))
const RegisterPage = Loadable(() => import("../../../modules/register"))

export enum RoutesLabelEnum {
    Main = 'Главная',
    Register = 'Регистрация',
    Login = 'Авторизация',
}

export enum RoutesLinkEnum {
    Main = '/',
    Register = '/register',
    Login = '/login'
}

export const router: RouterType[] = [
    {
        title: RoutesLabelEnum.Main,
        path: RoutesLinkEnum.Main,
        children: <MainPage/>
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
];
