import React, { FC, MouseEvent, createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sendUserInfoRequest } from '../../requests/sendUserInfoRequest';
import {IEditProfile, IProfileState, IUserNew } from '../../types/types';
import Navbar from '../Navbar/Navbar';
import { buttonStyle, textareaStyle } from '../../styles/styles';
import sendUserPost from '../../requests/sendUserPost';
import Modal from '../Modal/Modal';
import EditProfile from '../EditProfile/EditProfile';


export const ContextEditProfile = createContext<IEditProfile>({
    userData: null,
    setUserData: () => {},
    id: ''
})

const ProfilePage: FC = () => {
    const params = useParams();

    const [userInfo, setUserInfo] = useState<IProfileState | null>(null)
    const [newPost, setNewPost] = useState<string>('')


    useEffect( () => {
        sendUserInfo()
    }, [params.id])

    

    //Получение данных пользователя
    const sendUserInfo = async () => {
        const requestData = {
            url: 'http://localhost:4000/getUserInfo',
            id: params.id!
        }
        const result = await sendUserInfoRequest(requestData)
        await setUserInfo(result)        
    } 

    //Добавление нового поста
    const publicateWallNew = async (e: MouseEvent<HTMLFormElement>): Promise<any> => {
        e.preventDefault();  
        const newUserPost = {
            id: userInfo?.news ? userInfo?.news.length + 1 : 1,
            text: newPost ? newPost : ''
        } 
        const requestData = {
            url: 'http://localhost:4000/setUserPost',
            id: params.id!,
            post: newUserPost
        }
        const result = await sendUserPost(requestData)       
        if(result){
            await setUserInfo(result)   
            setNewPost('')
        }   
    }

    console.log('Modal open');
    return (
        <div>
            <div className='userInfo mt-8 gap-8 flex relative'>
                <Navbar />
                <div className='userInfo w-3/4'>
                    <div className='userPhoto flex gap-10 items-center px-7 py-10 bg-dark-grey relative'>
                        <div className="image w-28 h-28 relative">
                            <img src={userInfo?.userInfo.image} className='absolute top-0 left-0 h-full w-full border rounded-full border-gray'/>
                        </div>
                        <div className="inphormation">
                            <p className='profileStatus text-lg text-white mb-3'>{userInfo?.userInfo.status}</p>
                            <p className='profileName text-3xl text-white mb-3 font-semibold'>{userInfo?.name} {userInfo?.userInfo.surname}</p>
                            <p className='profileStatus text-base text-white mb-5'>{userInfo?.userInfo.study}</p>  
                            <ContextEditProfile.Provider value={{userData: userInfo ? userInfo : null, setUserData: setUserInfo, id: params.id ? params.id : ''}}>
                                <Modal textOpen='Редактировать профиль' modalTitle='Редактировать профиль' closeButtonText='Сохранить'> <EditProfile/> </Modal>  
                            </ContextEditProfile.Provider>                                             
                        </div>                       
                    </div>
                    
                    <div className="userWall mt-10">
                        <div className="writeNewPost px-9 py-6 bg-dark-grey rounded-2xl">
                            <form onSubmit={publicateWallNew}>
                                <textarea name="new" id="new" className={textareaStyle}  placeholder='Что у вас нового?' value={newPost} onChange={(e) => setNewPost(e.target.value)} ></textarea>                              
                                {newPost && <button type='submit' className={buttonStyle}>Опубликовать</button>}
                            </form>
                        </div>

                        <div className="userWallnews mt-10">
                            {
                                userInfo?.news && userInfo?.news.map((news: IUserNew) => {
                                    return (
                                        <div className='mb-7 p-5 bg-dark-grey rounded-2xl' key={news.id}>
                                            <p className='text-white'>{news.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfilePage;