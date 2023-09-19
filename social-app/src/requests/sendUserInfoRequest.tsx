import axios from "axios";
import { IProfileState } from "../types/types";


export interface TypeSendUserInfoRequest{
    url: string;
    id: number | string;
}
export async function sendUserInfoRequest(params: TypeSendUserInfoRequest): Promise<IProfileState> {
    try{
        const result = await axios.get(params.url, {
            params: {
                id: params.id
            }
        })
        if (result.status === 200){            
            return result.data
        }else{
            throw Error
        }            
    }catch(error){
        throw error
    }

}