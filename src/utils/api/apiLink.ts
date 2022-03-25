
// export const host = 'http://e874-113-185-51-101.ngrok.io'
export const host = 'http://api.kachiusa.vn/api'

export const urlLogin = `/Auth/login?v=1.0`

export const urlRegister = `/api/NguoiDung/register?v=1.0`

export const urlDetail = `/NguoiDung/Detail?v=1.0`

export const urlActivateApp = `/App/active-app?v=1.0`
export const urlGetTienichByNguoidung = `/TienIch/get-list-tienich-by-nguoidung?v=1.0`


export const urlSendNotiSoS = (idTienIch:string):string =>{
    return `/Noti/SendNoti-SoS?idti=${idTienIch}&v=1.0` 
} 
export const urlActivateDeviceByUser = (data: {idDevice:string , idtienich:string}):string =>{
    return `/ThietBiIoT/active-device-by-user?idDevice=${data.idDevice}&idti=${data.idtienich}&v=1.0` 
} 






import axios from 'axios';
axios.defaults.baseURL = host
export default axios;