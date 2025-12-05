"use client";

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {login, register} from "@/services/userService"
import Loader from '@/components/common/Loader';
import { useRouter } from 'next/navigation';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from "framer-motion";
import { toast } from "sonner"

function Login() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword , setShowPassword] = useState(false);
    
    const router = useRouter();
   
    const handleLogin = async () => {
      if ( !email || !password){
        toast.error("All fields are required!");
        return
      }
  try {
    setLoading(true);
    await login(email, password); // wait for API
    // handle success (maybe show toast or redirect)
    toast("Logged in Successfully")
    router.push("/Profile")
  } catch (err) {
    console.error(err);
    toast.error(`Login Failed : ${err}`)
    // handle error (show message)
  } finally {
    setLoading(false); // stop loader after API completes
  }
};

const handleRegister = async () => {
        if (!userName || !email || !password){
        toast.error("All fields are required!");
        return
      }
  try {
    setLoading(true);
    await register(userName, email, password); // wait for API
    // handle success
    toast("Registered Successfully, Now upload your resume to go further");
    router.push("/CreateProfile");
  } catch (err) {
    console.error(err);
    // handle error
  } finally {
    setLoading(false);
  }
};

  return (
    <div className='bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 min-h-screen flex items-center justify-center px-4'>

      <motion.div layout transition={{duration: 0.25 , ease:"easeInOut" }} className="bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl shadow-xl w-[350px] border border-orange-500/30">
        
        <Tabs defaultValue="login" className="w-full">
          <div className='flex justify-between'>
          <TabsList className="grid grid-cols-2 bg-slate-900/50 rounded-xl mb-6">
            <TabsTrigger 
              value="login" 
              className="text-orange-400 data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-lg"
            >
              Login
            </TabsTrigger>

            <TabsTrigger 
              value="signup" 
              className="text-orange-400 data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-lg"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <div className='-mt-1 mr-1'>
        {loading && <Loader/>}</div>
      </div>
          {/* LOGIN FORM */}
          <TabsContent value="login">
            <motion.div key="login" initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}>
            <div className="flex flex-col space-y-4">
               <input 
                type="email" 
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required
                className="p-3 rounded-lg bg-slate-900 text-orange-400 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <div className="flex gap-2 p-3 rounded-lg bg-slate-900 text-orange-400 border border-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-400">
              <input 
                type={showPassword ? "text" : "password" } 
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
                className="w-full focus:ring-0 focus:outline-none "
              />
              <button
                type='button'
                onClick={()=>{setShowPassword(!showPassword)}}>
                  {showPassword ? <VisibilityOff/> : <Visibility/>} 
                </button>
              </div>
              <button onClick={handleLogin}
              className=" relative bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all">
                Login
              </button>
            </div>
            </motion.div>
          </TabsContent>

          {/* SIGNUP FORM */}
          <TabsContent value="signup">
            <motion.div key="signup" initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}>
            <div className="flex flex-col space-y-4">
              <input 
                type="text" 
                placeholder="Username"
                onChange={(e)=>setUserName(e.target.value)}
                value={userName}
                required
                className="p-3 rounded-lg bg-slate-900 text-orange-400 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input 
                type="email" 
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required
                className="p-3 rounded-lg bg-slate-900 text-orange-400 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <div className="flex gap-2 p-3 rounded-lg bg-slate-900 text-orange-400 border border-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-400">
              <input 
                type={showPassword ? "text" : "password" } 
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
                className="w-full focus:ring-0 focus:outline-none "
              />
              <button
                type='button'
                onClick={()=>{setShowPassword(!showPassword)}}>
                  {showPassword ? <VisibilityOff/> : <Visibility/>} 
                </button>
              </div>
              <button onClick={handleRegister}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all">
                Sign Up
              </button>
            </div>
            </motion.div>
          </TabsContent>

        </Tabs>

      </motion.div>
    </div>
  )
}

export default Login
