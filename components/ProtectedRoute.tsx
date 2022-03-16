import React, { Component } from 'react'
import {Route,Navigate} from "react-router-dom";
const ProtectedRoute = (auth:any,component:Component,...rest:any) => {
  return (
    <Route {...rest} render={(props:any) =>{
         if(auth) return <Component {...props}/>
         if(!auth) return <Navigate to={"/"}/>
        }}/>
  )
}

export default ProtectedRoute;