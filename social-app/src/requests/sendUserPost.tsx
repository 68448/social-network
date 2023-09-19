import axios from "axios"
import { IUserNew } from "../types/types";

interface sendUserPostProps{
    url: string;
    id: number | string;
    post: IUserNew
}

export default async function sendUserPost(params: sendUserPostProps){
    try{
        const result = await axios.get(params.url, {
            params: {
                id: params.id,
                post: params.post
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

