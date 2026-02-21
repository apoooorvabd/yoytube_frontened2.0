import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext } from "react"
import { DataContext } from "../UserContext"
import { Label } from "@radix-ui/react-label"

 function Login(){
  const { sigup, setSignup, login, setLogin } = useContext(DataContext);
  return(
    <>
    <div className="w-full h-[100vh]  bg-red-50 justify-center  flex fixed top-0 right-0 h-screen w-[100vw]">
      <div className=" h-[60%] w-[50%] border-2 border-gray-800 rounded-md p-16 pl-16 pt-10 space-y-6 justify-center mt-12">
     <p className=" flex  gap-5"> 
      <Label htmlFor="username" className="justify-center flex border-2 border-slate-900 rounded-lg w-44 items-center ">Username</Label>
      <Input type="text" placeholder="Username" />
      </p>
      <p className=" flex  gap-5">
         <Label htmlFor="password" className="justify-center flex border-2 border-slate-900 rounded-lg w-44 items-center ">Password</Label>
      <Input type="password" placeholder="Password" />
      </p>
      <Button variant="destructive" className="w-full mt-4" onClick={() => console.log("Login clicked")}>Login</Button>
      {/* //dont have nay account signup */}
      <p className="text-center text-sm text-gray-500">
        Don't have an account? <a href="#" className="text-blue-500 hover:underline" onClick={()=>{setLogin(false); setSignup(true)}}>Sign up</a>
      </p>


    </div>
    </div>
    </>
  )
}
export default Login