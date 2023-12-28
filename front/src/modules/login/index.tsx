import {LoginForm} from "../../features/login";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserIsAuth} from "../../entities/user/model/selectors/user.selectors";
import {RoutesLinkEnum} from "../../app/routes/model";

const Login = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(selectUserIsAuth)

    useEffect(() => {
        if (isAuth) {
            navigate(RoutesLinkEnum.Articles)
        }
    }, [isAuth, navigate])

    return (
            <section className='auth'>
                <div className='auth__wrap'>
                    <LoginForm/>
                </div>
            </section>
    );
};

export default Login;
