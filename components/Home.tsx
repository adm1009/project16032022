import React,{ useState} from "react";
import { Navigate} from "react-router-dom";
import Navbar from "./Navbar";
class Home extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    const token = localStorage.getItem("token")
    let loggedin = true;
    if(token === null){
      loggedin = false
    };
    this.state = {
      loggedin
    }
  }
  render(){
    if (this.state.loggedin === false) return(<Navigate to="/"/>)
  return<> 
  <Navbar />
   <h3>Welcome to Infogen Labs Pvt.Ltd</h3>
  </>
  }
};

export default Home;
// import React,{ useState} from "react";
// import {Link} from "react-router-dom";
// import Navbar from "./Navbar";
// class Home extends React.Component {
//   render(){
//   return<>
//   <Navbar />
//    <h3>Welcome to Infogen Labs Pvt.Ltd</h3>
//   </>
//   }
// };

// export default Home;
