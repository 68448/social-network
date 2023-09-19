import { sendRequest } from "./sendRequest";

interface SendAuthProps{
    login: string;
    pass: string;
}

interface sendAuthReturn{
    answer: boolean;
    id: number;
}

export async function sendAuth(auth: SendAuthProps) : Promise<sendAuthReturn>{
    const sendData = {
        login: auth.login,
        pass: auth.pass,
        url: 'http://localhost:4000/checkUser'
    }
    const response = await sendRequest(sendData)
    return response
}



