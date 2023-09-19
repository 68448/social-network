import React, { FC, useContext } from 'react';
import { buttonStyle, inputStyle } from '../../styles/styles';
import {SubmitHandler, useForm} from "react-hook-form"
import { ContextEditProfile } from '../Profile/ProfilePage';
import { IUpdateUser, Inputs } from '../../types/types';
import updateUser from '../../requests/updateUser';




const EditProfile = () => {

    const useContextEditProfile = useContext(ContextEditProfile)
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const updateUserData = async (id: string, data: Inputs) => {
        const requestData = {
            url: 'http://localhost:4000/updateUserInfo',
            id: id,
            data: data
        }
        const result = await updateUser(requestData)   
    }



    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const id = useContextEditProfile.id
        updateUserData(String(id), data)
    }

      
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <input defaultValue={useContextEditProfile ? useContextEditProfile.userData?.userInfo.status : ''} placeholder='Обновить статус' {...register("status")} className={inputStyle}/>
                <input defaultValue={useContextEditProfile ? useContextEditProfile.userData?.userInfo.name : ''} placeholder='Введите имя' {...register("name")} className={inputStyle}/>
                <input defaultValue={useContextEditProfile ? useContextEditProfile.userData?.userInfo.surname : ''} placeholder='Введите фамилию' {...register("surname")} className={inputStyle}/>
                <input type='date' {...register("birthday")} className={inputStyle}/>
                <input defaultValue={useContextEditProfile ? useContextEditProfile.userData?.email : ''} placeholder='Введите email' {...register("email")} className={inputStyle}/>
                <input defaultValue='' placeholder='Введите пароль' {...register("pass")} className={inputStyle}/>
                <input defaultValue='' placeholder='Повоторите пароль' {...register("pass2")} className={inputStyle}/>
                <input defaultValue={useContextEditProfile ? useContextEditProfile.userData?.userInfo.city : ''} placeholder='Введите Город' {...register("city")} className={inputStyle}/>
                <input defaultValue={useContextEditProfile ? useContextEditProfile.userData?.userInfo.study : ''} placeholder='Введите ВУЗ' {...register("study")} className={inputStyle}/>
                <button type="submit" className={buttonStyle}>Сохранить</button>
            </form>
        </>
    );
};

export default EditProfile;