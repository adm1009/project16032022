import React from 'react'
import {Link} from "react-router-dom";
class Logout extends React.Component {
  constructor(props:any){
    super(props)
    localStorage.removeItem("token")
  }
  render(){
  return (
    <div style={{textAlign:"center"}}>
      <h3 style={{color:"red"}}>You have been Loggedout</h3>
      <Link to="/">Login</Link>
    </div>
  )
}
}
export default Logout;
// import React from 'react'
// import {Link} from "react-router-dom";
// class Logout extends React.Component {
//   render(){
//   return (
//     <div style={{textAlign:"center"}}>
//       <h3 style={{color:"red"}}>You have been Loggedout</h3>
//       <Link to="/">Login</Link>
//     </div>
//   )
// }
// }
// export default Logout;