import {NavLink} from 'react-router-dom';
import {Controller, FormProvider, SubmitHandler, useForm} from 'react-hook-form';

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../../entities/user/model/services/userApi";
import {selectIsUserAuthLoading} from "../../../entities/user/model/selectors/user.selectors";
import {AuthForm, Inputs} from "../../../entities/auth";


export const RegisterForm: React.FC = () => {
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
        control,
        handleSubmit,
    } = methods;

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(registerUser(data));
    };

    return (
            <div className='auth__item'>
                <h1 className='auth__title'>Registration</h1>
                <div className='auth__form'>
                    <form onSubmit={handleSubmit(onSubmit)} className='auth__body'>
                        <FormProvider {...methods}>
                            <div className='auth__input'>
                                <label>Name</label>
                                <Controller
                                        rules={{required: true}}
                                        control={control}
                                        name="name"
                                        render={({field: {onChange, value}}) => (
                                                <input
                                                        onChange={onChange}
                                                        value={value}
                                                        required
                                                />
                                        )}
                                />
                            </div>
                            <AuthForm loading={authLoading} buttonText='Register'/>
                        </FormProvider>
                    </form>
                    <div className='auth__note'>
                        Already have an account?
                        <NavLink to='/login'>Sign in to your account</NavLink>
                    </div>
                </div>
            </div>
    );
};

