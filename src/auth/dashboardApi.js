import axios from "axios";
import { BASE_URL } from "../utils/sevice";

export const GetDOB = () =>{
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/all/date`).then((res)=>{
             console.log('DOB response:-',res)
             return resolve (res.data?.users)
        }).catch((err)=>{
             return reject (err)
        })
     });
}