"use client";

import { logout } from '@/services/userService';
import { Home, Person2Outlined, Search ,X , Menu, Logout} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';
import { toast } from 'sonner';

function Sidebar() {
    const [open, setOpen] = useState(true);
    const route = useRouter();
    const handleLogout = ()=>{
        try{
            logout();
            toast("Logout Successfull");
            route.push('/');
        }catch(error){
            toast(error);
        }
    }
  return (
    <div className='flex fixed z-100'>
        <div
    className={`
      h-screen 
      bg-gray-900/40 
      backdrop-blur-md 
      text-white 
      transition-all 
      duration-300 
      border-r border-slate-700/40
      ${open ? "w-60" : "w-16"}
    `}
  >
         <div className="flex items-center justify-between p-4">
          <h1 className={`font-bold text-lg transition-opacity ${open ? "opacity-100" : "opacity-0 hidden pointer-events-none"}`}>
            SocialFolio
          </h1>
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

         <div className="mt-4 space-y-2 flex flex-col gap-2 px-4">
          {/* MENU ITEMS */}

          <Link href={"/Feed"}><div className="flex items-center gap-3"><Home/> {open && "Dashboard"}</div></Link>
          <Link href={"/Search"}><div className="flex items-center gap-3"><Search/> {open && "Search"}</div></Link>
          <Link href={"/Profile"}><div className="flex items-center gap-3"><Person2Outlined/> {open && "Profile"}</div></Link>
        </div>
        <div className='absolute bottom-5 p-4 flex gap-3 cursor-pointer'>
            <Logout onClick={handleLogout}/>
            {open && "Logout"}
        </div>
    </div>
    </div>
    
  )
}

export default Sidebar;