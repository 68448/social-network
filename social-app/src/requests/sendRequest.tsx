import axios from "axios";

export interface TypeRequestBody{
    login: string;
    pass: string;
    url: string;
}
export async function sendRequest(auth: TypeRequestBody): Promise<any> {
    try{
        const result = await axios.get(auth.url, {
            params: {
                login: auth.login,
                pass: auth.pass
            }
        })
        if (result.status === 200){
            return result.data
        }else{
            throw Error
        }            
    }catch(error){
        console.log(error)
    }

}