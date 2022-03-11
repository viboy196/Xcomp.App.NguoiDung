import axios, { urlDetail } from "../apiLink";
import { ExcuteResult, InfoResult } from "../apiTypes";



export const DetailInfo = async (token:string):Promise<ExcuteResult> => {
    console.log('urDetailInfo ', urlDetail);

    const res = await axios.get(
      "http://api.kachiusa.vn/api/NguoiDung/Detail?v=1.0",
      {
        headers: {
          Authorization: `bearer ${token}`,
          accept: "text/plain",
        },
      }
    );
    if(res.status === 401){
      return {status:false , errorMessage:'Unauthorized'}
    }
    return res.data
  }
