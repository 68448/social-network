import React, { FC, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
import { ContextIsLogin } from '../../App';




const Header:FC = () => {

    const [userHeader, setUserHeader ]= useState<boolean>(false)
    const AuthContext = useContext(ContextIsLogin)
    const isLogin = AuthContext.isLogin
    const [userID, setUserID] = useState<string | null>(null)

    useEffect(() => {
        if(isLogin){
            setUserHeader(true)
            setUserID(localStorage.getItem('id'))
        }else{setUserHeader(false)}
    }, [isLogin])

    return (
        <>
        <nav className="bg-dark-grey border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">SocialNik</span>
        </Link>
        <UserHeader/>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
                <Link to={userHeader ? '/messages' : '/login'} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-white/80 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Сообщения</Link>
            </li>
            <li>
                <Link to={userHeader ? '/news' : '/login'} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white/80 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Новости</Link>
            </li>
            <li>
                <Link to={userHeader ? `/profile/${userID}` : '/login'} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white/80 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Профиль</Link>
            </li>
            <li>
                <Link to={userHeader ? '/friends' : '/login'} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white/80 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Друзья</Link>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        </>
    );
};

export default Header;