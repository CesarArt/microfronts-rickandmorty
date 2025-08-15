import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { usersDummyData } from "../utils/dummy-data";
import { generateObjectId } from "../utils/functions/common";
import useStorageToken from "../custom-hooks/use-storage-token";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Login {
    user: string
    password: string
}

export function LoginPage() {
    const navigate = useNavigate();
    const { addUserToken } = useStorageToken();

    const { register, handleSubmit, control, formState: { errors } } = useForm<Login>();
    const [showPass, setShowPass] = useState(false)

    const onSubmit = async (data: Login) => {
        const userFound = usersDummyData.find(u => u.user === data.user && u.password === data.password)
        if (!userFound) {
            toast.error("Username or password is wrong")
            return
        }
        const token = generateObjectId()
        const added = addUserToken(token)
        if (!added) {
            return
        }
        toast.success("Login successful")

        goMainPage()
    }
    const goMainPage = () => {
        navigate("/characters")
    }
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="p-4 rounded-2xl shadow-lg bg-white w-[100%] max-w-[400px]">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="container flex flex-col py-6 ">
                        <h1 className="text-center text-[28px] font-bold leading-tight px-4  pb-3 pt-5">Sign In</h1>
                        <h6 className="text-center text-[22px]">Welcome</h6>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="">
                                <div className="flex flex-col items-start gap-2">
                                    <label className="text-base font-bold leading-normal pb-1">User:</label>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-10 placeholder:text-[#637588] p-4 text-base font-normal leading-normal" {...register("user", { required: true, maxLength: 18 })} maxLength={18} placeholder="User" />
                                    {errors.user?.type === 'required' ?
                                        <p className="text-red-500"> *Required Field</p> : <> </>
                                    }
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-col items-start gap-2">
                                    <label className="text-base font-bold leading-normal pb-1">Password:</label>
                                    <Controller
                                        name="password"
                                        control={control}
                                        rules={{ required: true, maxLength: 18 }}
                                        render={({ field: { onChange } }) =>
                                            <div className="flex form-input w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black bg-[#f0f2f4] items-center gap-2 h-10">
                                                <input className="w-full focus:outline-0 focus:ring-0 border-none focus:border-none placeholder:text-[#637588] p-4 text-base font-normal leading-normal" type={showPass ? "text" : "password"} onChange={onChange} maxLength={18} placeholder="Password" />
                                                <span className="w-10 content-center cursor-pointer hover:opacity-80" data-testid="eye-icon" onClick={() => setShowPass(!showPass)}>
                                                    {
                                                        !showPass ?
                                                            <Eye size={16} data-testid="eye-svg" /> :
                                                            <EyeOff size={16} data-testid="eyeoff-icon" />
                                                    }
                                                </span>
                                            </div>
                                        }
                                    />
                                    {errors.password?.type === 'required' ?
                                        <p className="text-red-500">*Required Field</p> : <> </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="py-6">
                        <button className="bg-sky-700 w-full text-white rounded-xl h-10 cursor-pointer hover:opacity-80" type="submit">Login</button>
                    </span>
                </form>
            </div>
        </div>
    );
}
