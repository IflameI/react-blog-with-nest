import {NavLink} from 'react-router-dom';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../../entities/user/model/services/userApi";
import {selectIsUserAuthLoading} from "../../../entities/user/model/selectors/user.selectors";
import {AuthForm} from "../../../entities/auth";

type Inputs = {
    email: string;
    password: string;
};

export const LoginForm: React.FC = () => {
    const dispatch = useDispatch()
    const authLoading = useSelector(selectIsUserAuthLoading)

    const methods = useForm<Inputs>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const {
        handleSubmit,
    } = methods;

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(loginUser(data));
    };

    return (
            <div className='auth__item'>
                <h1 className='auth__title'>Sign in</h1>
                <div className='auth__form'>
                    <form onSubmit={handleSubmit(onSubmit)} className='auth__body'>
                        <FormProvider {...methods}>
                            <AuthForm loading={authLoading} buttonText='Login'/>
                        </FormProvider>
                    </form>
                    <div className='auth__note'>
                        Don't have an account?
                        <NavLink to='/register'>Register now</NavLink>
                    </div>
                </div>
            </div>
    );
};

