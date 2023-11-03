'use client';

import { useState } from "react";
import Heading from "../ components/Heading";
import Input from "../ components/inputs/Input";
import { FieldValues, useForm ,SubmitHandler} from "react-hook-form";
import Button from "../ components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
    const [isLoading,setIsLoading]=useState(false)
    const {register,handleSubmit,formState:{errors},} = useForm<FieldValues>({defaultValues:{
        email: "",
        password: "",
    }});
    const onSubmit:SubmitHandler<FieldValues>=(data)=>{setIsLoading(true);
    console.log(data);}
    return (  <>
    <Heading title="Đăng nhập thành viên LuxeGlobal"/>
    <Button 
    outline
    label="Tiếp tục đăng nhập với với Google"
    icon={AiOutlineGoogle}
    onClick={()=>{ }}/>
    <hr className="bg-slate-300 w-full h-px"/>
    <Input id="email"
    label="Email"
    disabled={isLoading} 
    register={register}
    errors={errors}
    required/>
    <Input id="Password"
    label="Mật khẩu"
    disabled={isLoading} 
    register={register}
    errors={errors}
    required
    type="password"/>
    <Button label={isLoading?"Loading":'Đăng nhập'} onClick={handleSubmit(onSubmit)}/>
    <p className="text-sm">Bạn chưa có tài khoảng?{""} <Link className="underline" href='/register'>Đăng ký
    </Link>
        </p>
    </>);
}
 
export default LoginForm;