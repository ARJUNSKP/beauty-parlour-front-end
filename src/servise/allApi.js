import { BASE_URL } from "./baseurl";
import { commonrequest } from "./commonrequest";

export const sendInqueryData=async(body)=>{
    return await commonrequest("POST",`${BASE_URL}/express/service/booking`,body)
}