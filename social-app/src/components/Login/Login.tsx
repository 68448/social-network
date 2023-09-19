import React, {  useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../App';
import { sendAuth } from '../../requests/sendAuth';
import { buttonStyle } from '../../styles/styles';


const Login = () => {

    const loginInput = useRef<HTMLInputElement>(null)
    const passInput = useRef<HTMLInputElement>(null)
    const [er, setEr] = useState<boolean>(false)
    const navigate = useNavigate()
    const { setIsLogin } = useAuthContext()

    const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();    
        
        const response = await sendAuth({login: loginInput.current?.value!, pass: passInput.current?.value!})
        if (response.answer){
            setEr(false);
            setIsLogin(true);
            localStorage.setItem('id', response.id.toString())
            navigate('/news')
        }else{
            setEr(true)
            setIsLogin(false)
        }
    }



    return (
        <div className="container mx-auto max-w-3xl mt-5 bg-dark-grey">
            <form
            onSubmit={formSubmitHandler}
            className="flex flex-col justify-center items-center p-10 border rounded-xl border-gray-600"
            >
            <p className="text-2xl mb-3 text-white">Страница входа</p>

            <input type="text" className='border rounded-xl mt-3 border-gray-600 px-5 py-2' ref={loginInput} placeholder='Введите логин'/>
            <input type="password" className='border rounded-xl mt-3 mb-3 border-gray-600 px-5 py-2' ref={passInput} placeholder='Введите пароль'/>

            {er && <p className='text-lg text-red-600 mt-3'>Ошибка ввода логина или пароля</p>}
            <button className={buttonStyle}>
                Войти
            </button>
            </form>
      </div>
    );
};

export default Login;