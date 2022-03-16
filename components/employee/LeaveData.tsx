import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate,Link} from "react-router-dom";
class LeaveData extends React.Component<any,any>  {
  constructor(props:any){
    super(props);
    const token = localStorage.getItem("token");
    let loggedin =true;
    if(token === null){
      loggedin =false
    }
    this.state = {
      date: "",
    reason: "",
    show:false,
    loggedin
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange =(e: any)=> {
    this.setState({
      [e.target.name]:e.target.value
    })
  };
  submitForm =()=> {
    localStorage.setItem("details", JSON.stringify(this.state));
    this.setState({
      show:true
    })
  };
  editHandler = () =>{
    this.setState({
      show:false
    });
    <Navigate to="/home/leavedata"/>
  }
  render(){
    if (this.state.loggedin === false) return(<Navigate to="/"/>)
  return (
    <>
      <Navbar />
      <span style={{textDecoration:"underline"}}>Leave Details</span>
      <hr />
      {!this.state.show && <form onSubmit={this.submitForm}>
        <span>Date:- </span>
        <input
          type="text"
          value={this.state.date}
          onChange={this.onChange}
          name="date"
          style={{ marginTop: "10px" }}
        /> <span>YYYY-MM-DD</span>
        <br />
        <span>Reason:- </span>
        <input
          type="text"
          value={this.state.reason}
          onChange={this.onChange}
          name="date"
          style={{ marginTop: "10px" }}
        />
        <br />
        <input type="submit" value="Apply" style={{
              backgroundColor: "cornflowerblue",
              marginTop: "10px",
              color: "white",
              border: "none",
              fontSize: "15px",
            }}/>
      </form>}
      {this.state.show && <span style={{color:"red"}}>Applied for Leave</span> }
      {this.state.show && <table style={{marginLeft:"580px"}}>
        <thead>
          <tr>
            <td><h3>Date </h3></td>
            <td><h3>Reason </h3></td>
            <td><h3>Edit </h3></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.date}</td>
            <td>{this.state.reason}</td>
            <td><span onClick={this.editHandler}><Link to="/home/leavedata">Edit</Link></span></td>
          </tr>
        </tbody>
      </table> }
    </>
  );
};
}
export default LeaveData;
// import React, { useState } from "react";
// import Navbar from "../Navbar";
// const data =() =>{
//   const leave =localStorage.getItem("leavedata");
//   if(!leave)return{
//     date: "",
//     reason: "",
//   }
//   return JSON.parse(leave)
// }
// const LeaveData = () => {
//   const [show, setShow] = useState(false);
//   const [leave, setLeave] = useState(data);
//   const dateHandler = (e:any) =>{
//     setLeave({...leave,date:e.target.value})
//   }
//   const reasonHandler = (e:any) =>{
//     setLeave({...leave,reason:e.target.value})
//   }
//   const submitLeaveHandler = () =>{
//     localStorage.setItem("leavedata",JSON.stringify(leave));
//     setShow(true);
//   }
//   return (
//     <>
//       <Navbar />
//       <span style={{textDecoration:"underline"}}>Leave Details</span>
//       <hr />
//       {!show && <form onSubmit={submitLeaveHandler}>
//         <span>Date:- </span>
//         <input
//           type="text"
//           value={leave.date}
//           onChange={dateHandler}
//           name="date"
//           style={{ marginTop: "10px" }}
//         /> <span>YYYY-MM-DD</span>
//         <br />
//         <span>Reason:- </span>
//         <input
//           type="text"
//           value={leave.reason}
//           onChange={reasonHandler}
//           name="date"
//           style={{ marginTop: "10px" }}
//         />
//         <br />
//         <input type="submit" value="Apply" style={{
//               backgroundColor: "cornflowerblue",
//               marginTop: "10px",
//               color: "white",
//               border: "none",
//               fontSize: "15px",
//             }}/>
//       </form>}
//       {show && <span style={{color:"red"}}>Applied for Leave</span> }
//     </>
//   );
// };

// export default LeaveData;
