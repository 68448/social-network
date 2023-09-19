import React, {FC, createContext, useContext, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IContextLogin } from './types/types';
import PR from './components/PrivateRoute';
import Login from './components/Login/Login';
import NewsPage from './components/NewsPage/NewsPage';
import Header from './components/Header/Header';
import ProfilePage from './components/Profile/ProfilePage';

export const ContextIsLogin = createContext<IContextLogin>({
  isLogin: false,
  setIsLogin: () => {}
})
export const useAuthContext = () => useContext(ContextIsLogin)

const App: FC = () => {

  const [isLogin, setIsLogin] = useState<boolean>(false)

  const contextValue = {
    isLogin,
    setIsLogin
  }

  return (
    <BrowserRouter>
        <ContextIsLogin.Provider value={contextValue}>
        <div className='container max-w-7xl mx-auto'>
          <Header/>
          <Routes>
            <Route path='*' element={<Login />}/>
            <Route path='/news' element={<PR><NewsPage /></PR>}/>
            <Route path='/profile/:id' element={<PR><ProfilePage /></PR>}/>
          </Routes>
        </div>
        </ContextIsLogin.Provider>
    </BrowserRouter>

  );
};

export default App;
