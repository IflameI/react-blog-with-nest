import {RegisterForm} from "../../features/register";
import {useDispatch, useSelector} from "react-redux";
import {selectIsUserAuthSucceeded} from "../../entities/user/model/selectors/user.selectors";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {clearState} from "../../entities/user/model/reducers/user";
import {RoutesLinkEnum} from "../../app/routes/model";

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuthSuccess = useSelector(selectIsUserAuthSucceeded)

    useEffect(() => {
        if (isAuthSuccess) {
            navigate(RoutesLinkEnum.Login)
        }
        return () => {
            dispatch(clearState())
        }
    }, [dispatch, isAuthSuccess, navigate])


    return (
            <section className='auth'>
                <div className='auth__wrap'>
                    <RegisterForm/>
                </div>
            </section>
    );
};

export default Register;
