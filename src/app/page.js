import React from 'react'
import Cookies from 'js-cookie'
import Login from './Login/page'
import Profile from './Profile/page';

function SocialFolio() {
  const token = Cookies.get("token");

  return (
    <>
    {token ? <Profile/> : <Login/> } 
    </>
  )
}

export default SocialFolio