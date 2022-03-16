import React,{useState} from 'react'

const Auth = (initialvalue:any) => {
  const[isAuth,setIsAuth] =useState(initialvalue);
  function login () {
      setTimeout(()=>{
          setIsAuth(true)
      },1000)
  } 
  function logout () {
    setTimeout(()=>{
        setIsAuth(false)
    },1000)
}
  return [isAuth,login,logout];
}

export default Auth;