export interface IContextLogin{
    isLogin: boolean;
    setIsLogin: (isLogin: boolean) => void;
}

export interface IEditProfile{
    userData: null | IProfileState;
    setUserData: (userData: IProfileState) => void;
    id: string | number
}


export interface IAuth{
    login: string;
    pass: string;
}

export interface INew{
    albumId: number;
    id: number;
    title: string;
    url: string   
}

export interface IUserInfo{
    image: string;
    name: string;
    surname: string;
    birthday: Date;
    status: string;
    city: string;
    languages: Array<string>;
    study: string;
}

interface IObjectKeys {
    [key: string]: string | number | object;
  }

export interface IProfileState extends IObjectKeys{
    key: string;
    id: number;
    login: string;
    name: string;
    email: string;
    pass: string;
    userInfo: IUserInfo;
    news: IUserNew[];
}

export interface IUserNew{
    id: number;
    text: string;
}

export interface IUpdateUser{
    status: string;
    name: string;
    surname: string;
    date: Date | string;
    email: string;
    pass: string;
    pass2: string;
    city: string;
    study: string;
}

export interface Inputs{
    status: string
    name: string
    email: string
    pass: string
    pass2: string
    surname: string
    birthday: string
    city: string
    study: string
}