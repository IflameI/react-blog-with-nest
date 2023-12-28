import React from "react";
import {Controller, useFormContext} from 'react-hook-form';

export type Inputs = {
    name?: string;
    email: string;
    password: string;
};

interface IAuthForm {
    loading: boolean;
    buttonText: string;
}


export const AuthForm: React.FC<IAuthForm> = ({loading, buttonText}) => {
    const {control, formState: {errors}} = useFormContext<Inputs>();

    return (
            <>
                <div className='auth__input'>
                    <label>Email</label>
                    <Controller
                            rules={{
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Incorrect email',
                                }
                            }}
                            control={control}
                            name="email"
                            render={({field: {onChange, value}}) => (
                                    <input
                                            onChange={onChange}
                                            value={value}
                                            required
                                    />
                            )}
                    />
                    {errors.email && errors.email.type === 'required' && (
                            <span className='auth__error'></span>
                    )}
                    {errors.email && errors.email.type === 'pattern' && (
                            <span className='auth__error'>{errors.email.message}</span>
                    )}
                </div>
                <div className='auth__input'>
                    <label>Password</label>
                    <Controller
                            rules={{required: true, minLength: 4, maxLength: 16}}
                            control={control}
                            name="password"
                            render={({field: {onChange, value}}) => (
                                    <input
                                            onChange={onChange}
                                            value={value}
                                            required
                                            type='password'
                                    />
                            )}
                    />
                    {errors.password && errors.password.type === 'required' && (
                            <span className='auth__error'>This field is required</span>
                    )}
                    {errors.password && errors.password.type === 'maxLength' && (
                            <span className='auth__error'>16 characters maximum</span>
                    )}
                    {errors.password && errors.password.type === 'minLength' && (
                            <span className='auth__error'>At least 4 characters </span>
                    )}
                </div>
                <div className='auth__button'>
                    <button type='submit' className='btn' disabled={loading}>
                        {buttonText}
                    </button>
                </div>
            </>)
}
