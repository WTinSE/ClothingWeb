'use client';

import { useState } from "react";
import Heading from "../ components/Heading";
import Input from "../ components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../ components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // Sửa đường dẫn đến useRouter

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn('credentials', {
      ...data,
      redirect: false, // Sửa flase thành false
    }).then((callback) => { // Thêm dấu ngoặc vào callback
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success('Logged In');
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <>
      <Heading title="Đăng nhập thành viên LuxeGlobal" />
      <Button
        outline
        label="Tiếp tục đăng nhập với Google"
        icon={AiOutlineGoogle}
        onClick={() => { }}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password" // Sửa thành id="password"
        label="Mật khẩu"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button label={isLoading ? "Loading" : 'Đăng nhập'} onClick={handleSubmit(onSubmit)} />
      <p className="text-sm">Bạn chưa có tài khoản?{" "} <Link className="underline" href='/register'>Đăng ký</Link></p>
    </>
  );
};

export default LoginForm;
