"use client";

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {login, register} from "@/services/userService"
import Loader from '@/components/common/Loader';
import { useRouter } from 'next/navigation';


function Login() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    const router = useRouter();
   
    const handleLogin = async () => {
  try {
    setLoading(true);
    await login(email, password); // wait for API
    // handle success (maybe show toast or redirect)
    router.push("/Profile")
  } catch (err) {
    console.error(err);
    // handle error (show message)
  } finally {
    setLoading(false); // stop loader after API completes
  }
};

const handleRegister = async () => {
  try {
    setLoading(true);
    await register(userName, email, password); // wait for API
    // handle success
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

      <div className="bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl shadow-xl w-[350px] border border-orange-500/30">
        
        {loading && <Loader/>}
        <Tabs defaultValue="login" className="w-full">
          
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

          {/* LOGIN FORM */}
          <TabsContent value="login">
            <div className="flex flex-col space-y-4">
               <input 
                type="email" 
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required
                className="p-3 rounded-lg bg-slate-900 text-orange-400 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input 
                type="password" 
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
                className="p-3 rounded-lg bg-slate-900 text-orange-400 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button onClick={handleLogin}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all">
                Login
              </button>
            </div>
          </TabsContent>

          {/* SIGNUP FORM */}
          <TabsContent value="signup">
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
              <input 
                type="password" 
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
                className="p-3 rounded-lg bg-slate-900 text-orange-400 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button onClick={handleRegister}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all">
                Sign Up
              </button>
            </div>
          </TabsContent>

        </Tabs>

      </div>
    </div>
  )
}

export default Login
