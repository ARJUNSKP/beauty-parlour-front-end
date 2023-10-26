import axios from 'axios'

export const commonrequest=async(method,url,body)=>{
    const config={
        method,
        url,
        data:body
    }
    const Responce=await axios (config)
    if(Responce){
        return Responce
    }else{
        return Responce
    }
}