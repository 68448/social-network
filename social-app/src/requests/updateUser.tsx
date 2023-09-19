import axios from "axios"
import { IUpdateUser, Inputs } from "../types/types";

interface updateUserProps{
    url: string;
    id: number | string;
    data: Inputs
}

export default async function updateUser(params: updateUserProps){
    try{
        const result = await axios.get(params.url, {
            params: {
                id: params.id,
                data: params.data
            }
        })
        if (result.status === 200){            
            return result.data
        }else{
            throw Error
        }   
    }catch(err){
        throw err
    }
};

