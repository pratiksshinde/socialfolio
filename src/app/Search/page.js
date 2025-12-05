"use client";

import { getUsers } from '@/services/publicService';
import { PersonAddAlt1 } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [userData , setUserData] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async ()=>{ 
    if (!search.trim()){
        setUserData([]);
        return;
    }

    try{
        const res = await getUsers(search);
        setUserData(res);
        console.log(res);
    }catch(error){
        console.log(error);
    }
    }

    fetchUsers();
  console.log(userData);

}, [search])
  
  console.log(userData);

  const handleFollow = (userId) => {
    console.log(userId);
  }
  const handleUser = (username) => {
    router.push(`/Search/${username}`);
  }
  return (
    <div className="min-h-screen flex flex-col px-20 pl-70 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
      <div className='flex w-full justify-between'>
        <div className='flex flex-col justify-center mt-14 gap-2 w-[70%] '>
          <input
            placeholder='Search user'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-md border border-gray-300 text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
          />

          <div className='flex flex-col mt-7 h-140 mr-8 gap-3 p-3 pr-5 rounded-lg shadow-2xl overflow-y-auto '>
            {userData.map((user => (
              <div key={user.id} onClick={() => handleUser(user.username)}
                className="flex items-center justify-between bg-slate-800/40 border border-orange-600 rounded-[32px] p-1">
                {/* Avatar */}
                <div className="flex items-center gap-3">
                  <div className="rounded-full border-2 border-orange-500 p-2 w-10 h-10 flex items-center justify-center text-white font-bold">
                    {user.initials}
                  </div>
                  <h2 className="text-white font-medium">{user.name}</h2>
                </div>

                {/* Add Icon */}
                <PersonAddAlt1 className="text-orange-500 cursor-pointer mr-3" onClick={() => { handleFollow(user.id) }} />
              </div>
            )))}
          </div>
        </div>
        <div className="flex flex-col mt-34 ml-7 w-[24%] gap-4">
          <h1 className="text-white text-3xl font-bold">Suggested</h1>
          <div className="flex flex-col gap-3 overflow-y-auto h-108 pr-5 rounded-lg">
            {userData.map((user => (
              <div key={user.id} onClick={() => { handleUser(user.username) }}
                className="flex items-center justify-between bg-slate-800/40 border border-orange-600 rounded-[32px] p-1">
                {/* Avatar */}
                <div className="flex items-center gap-3">
                  <div className="rounded-full border-2 border-orange-500 p-2 w-10 h-10 flex items-center justify-center text-white font-bold">
                    {user.initials}
                  </div>
                  <h2 className="text-white font-medium">{user.name}</h2>
                </div>

                {/* Add Icon */}
                <PersonAddAlt1 className="text-orange-500 cursor-pointer mr-3" onClick={() => { handleFollow(user.id) }} />
              </div>
            )))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Search