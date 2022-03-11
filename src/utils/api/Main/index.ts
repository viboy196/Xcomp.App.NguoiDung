import axios, { urlDetail } from "../apiLink";
import { ExcuteResult, InfoResult } from "../apiTypes";



export const DetailInfo = async (token:string):Promise<InfoResult|undefined> => {
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
    const data:ExcuteResult = res.data;
    if(data.status){
      const dt:InfoResult = data.result;
      console.log('convert data',dt);
      return dt;
    }
    return undefined;
  }
