import React from 'react'
import Navbar from '../Navbar';
import {Link} from "react-router-dom";
import { Navigate} from "react-router-dom";
class LeaveDetails extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    const token = localStorage.getItem("token");
    let loggedin =true;
    if(token === null){
      loggedin =false
    }
    this.state = {
      loggedin
    }
  }
  render(){
    if (this.state.loggedin === false) return(<Navigate to="/"/>)
  return (
    <div>
        <Navbar />
        <Link to="myregularize"><button>My Regularizartion</button></Link>
        <Link to="applyregularize"><button>Apply for Regularization</button></Link>
    </div>
  )
}
}
export default LeaveDetails;
// import React from 'react'
// import Navbar from '../Navbar';
// import {Link} from "react-router-dom";
// const LeaveDetails = () => {
//   return (
//     <div>
//         <Navbar />
//         <Link to="myregularize"><button>My Regularizartion</button></Link>
//         <Link to="applyregularize"><button>Apply for Regularization</button></Link>
//     </div>
//   )
// }

// export default LeaveDetails;