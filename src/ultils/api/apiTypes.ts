
export interface ExcuteResult{
    errorMessage?:string,
    result?:any|string,
    status:boolean
}

export type InputRegister = {
    phone:string,
    password:string,
    fullName:string,
    email:string,
}
