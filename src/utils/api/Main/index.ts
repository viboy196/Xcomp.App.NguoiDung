import { ExcuteResult, Unauthorized } from './../apiTypes';
import { urlActivateApp , urlSendNotiSoS , urlGetTienichByNguoidung, urlActivateDeviceByUser } from './../apiLink';
import axios, { urlDetail } from "../apiLink";
import { AxiosRequestConfig } from 'axios';



export const DetailInfoNguoiDung = async (token:string , url = urlDetail):Promise<ExcuteResult> => {
    const tag = 'DetailInfoNguoiDung';
    console.log(`${tag} url:`, url);

    const config:AxiosRequestConfig = {
      headers: {
        Authorization: `bearer ${token}`,
        accept: "text/plain",
      },
    }
      const res = await axios.get(
        urlDetail,
        config
      );
      console.log(`${tag} data:`, res.data);
      return res.data as ExcuteResult;
  }



export const ActivateApp = async (tokenNotification :string , token:string):Promise<ExcuteResult> => {
    console.log('urlActivateApp ', urlActivateApp);
    
    console.log(tokenNotification, token);

    const config = {
      headers: {
        Authorization: `bearer ${token}`,
        accept: "text/plain",
      },
    };

    const bodyParameters = {
      appToken: tokenNotification,
      device:"expo",
      typeApp:"user",
   };
   try {
    const res = await axios.post(
      urlActivateApp,
      bodyParameters,
      config
    );
    console.log('ActivateApp' , res.data);
    
    return res.data
   } catch (error) {
     return {status:false}
   }
    
  }

export const GetTienichByNguoidung = async (data: { token:string }):Promise<ExcuteResult> => {
  const tag = 'GetTienichByNguoidung';
  const url = urlGetTienichByNguoidung;
  console.log(`${tag} url:`, url);

  const config:AxiosRequestConfig = {
    headers: {
      Authorization: `bearer ${data.token}`,
      accept: "text/plain",
    },
  }
  try {
    const res = await axios.get(
      url,
      config
    );
    console.log(`${tag} data:`, res.data);
    return res.data as ExcuteResult;
  } catch (error) {
    return {status:false , errorMessage:Unauthorized}
  }

}
export const SendNotiSoS = async (data: {idTienich:string, token:string }):Promise<ExcuteResult> => {
  const tag = 'SendNotiSoS';
  const url = urlSendNotiSoS(data.idTienich)
  console.log(`${tag} url:`, url);

  const config:AxiosRequestConfig = {
    headers: {
      Authorization: `bearer ${data.token}`,
      accept: "text/plain",
    },
  }
  try {
    const res = await axios.get(
      url,
      config
    );
    console.log(`${tag} data:`, res.data);
    return res.data as ExcuteResult;
  } catch (error) {
    console.log(error)
    return {status:false , errorMessage:Unauthorized}
  }

}

export const ActivateDeviceByUser = async (data: {idDevice:string, token:string }):Promise<ExcuteResult> => {
  const tag = 'SendNotiSoS';
  const url = urlActivateDeviceByUser(data.idDevice)
  console.log(`${tag} url:`, url);

  const config:AxiosRequestConfig = {
    headers: {
      Authorization: `bearer ${data.token}`,
      accept: "text/plain",
    },
  }
  try {
    const res = await axios.get(
      url,
      config
    );
    console.log(`${tag} data:`, res.data);
    return res.data as ExcuteResult;
  } catch (error) {
    console.log(error)
    return {status:false , errorMessage:Unauthorized}
  }

}

