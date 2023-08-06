import axios from "axios";
import { BASE_URL } from "../utils/sevice";

export const SendOtp = async({loginData})=>{
    return new Promise((resolve, reject) => {
       axios.post(`${BASE_URL}/sendotp`,loginData).then((res)=>{
            console.log('send otp response:-',res)
            return resolve (res.data)
       }).catch((err)=>{
            return reject (err)
       })
    });
}

export const LoginApi = ({loginData}) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/login`,loginData).then((res)=>{
               localStorage.setItem('user_id',JSON.stringify(res?.data?.data))
             console.log('login response:-',res.data.data)
             return resolve (res.data)
        }).catch((err)=>{
             return reject (err)
        })
     });
}
