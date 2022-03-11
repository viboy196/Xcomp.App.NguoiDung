
// export const host = 'http://e874-113-185-51-101.ngrok.io'
export const host = 'http://api.kachiusa.vn/api'

export const urlLogin = `/Auth/login?v=1.0`

export const urlRegister = `/api/NguoiDung/register?v=1.0`

export const urlDetail = `/NguoiDung/Detail?v=1.0`

import axios from 'axios';
axios.defaults.baseURL = host
export default axios;