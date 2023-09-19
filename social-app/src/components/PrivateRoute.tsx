import React, {FC, useContext} from 'react';
import { ContextIsLogin } from '../App';
import { Navigate } from 'react-router-dom';


interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({children}) => {

    const auth = useContext(ContextIsLogin)
    
    if (auth?.isLogin === true){
        return (
            <>
                {children}
            </>
        )
    }else{
        return <Navigate to="/login" />
    }
}

export default PrivateRoute;