import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate, Link} from "react-router-dom";
class ApplyRegularize extends React.Component<any,any>{
  constructor(props:any){
    super(props);
    const token = localStorage.getItem("token");
    let loggedin =true;
    if(token === null){
      loggedin =false
    }
    this.state = {
      approver: "hr",
    reason: "work from home",
    date: "",
    checkin: "",
    checkout: "",
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
    localStorage.setItem("regularizedetails", JSON.stringify(this.state));
    this.setState({
      show:true
    })
  };
  editHandler = () =>{
    this.setState({
      show:false
    });
    <Navigate to="/home/leave/applyregularize"/>
  }
  render(){
    if (this.state.loggedin === false) return(<Navigate to="/"/>)
  return (
    <div>
      <Navbar />
      {!this.state.show && <form onSubmit={this.submitForm}>
        <span>Select Lead/Approver:- </span>
        <select
          value={this.state.approver}
          onChange={this.onChange}
          style={{ marginTop: "10px" }}
        >
          <option value="hr">HR</option>
          <option value="department head">DEPARTMENT HEAD</option>
          <option value="team leader">TEAM LEADER</option>
          <option value="senior manager">SENIOR MANAGER</option>
          <option value="manager">MANAGER</option>
        </select>
        <br />
        <span>Date:- </span>
        <input
          type="text"
          name="date"
          value={this.state.date}
          onChange={this.onChange}
          style={{ marginTop: "10px" }}
        />
        <span> YYYY-MM-DD</span>
        <br />
        <span>Check In:- </span>
        <input
          type="text"
          name="checkin"
          value={this.state.checkin}
          style={{ marginTop: "10px" }}
          onChange={this.onChange}
        />
        <span> HH:MM:SS (24 hrs format)</span>
        <br />
        <span>Check Out:- </span>
        <input
          type="text"
          name="checkout"
          value={this.state.checkout}
          style={{ marginTop: "10px" }}
          onChange={this.onChange}
        />
        <span> HH:MM:SS (24 hrs format)</span>
        <br />
        <span>Reason:- </span>
        <select
          value={this.state.reason}
          onChange={this.onChange}
          style={{ marginTop: "10px" }}
        >
          <option value="work from home">WORK FROM HOME</option>
          <option value="on site">ON SITE</option>
          <option value="half day">HALF DAY</option>
          <option value="present">PRESENT</option>
        </select>
        <br />
        <input
          type="submit"
          value="Apply"
          style={{
            backgroundColor: "cornflowerblue",
            marginTop: "10px",
            color: "white",
            border: "none",
            fontSize: "15px",
          }}
        />
      </form>}
      {this.state.show && <span style={{color:"green"}}>Regulaize Request sent successfully</span>}
      {this.state.show && <table style={{marginLeft:"450px"}}>
        <thead>
          <tr>
            <td><h3>Approver </h3></td>
            <td><h3>Reason</h3></td>
            <td><h3>Date </h3></td>
            <td><h3>Checkin </h3></td>
            <td><h3>checkout </h3></td>
            <td>
              <h3>Edit </h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.approver}</td>
            <td>{this.state.reason}</td>
            <td>{this.state.date}</td>
            <td>{this.state.checkin}</td>
            <td>{this.state.checkout}</td>
            <td><span onClick={this.editHandler}><Link to="/home/leave/applyregularize">Edit</Link></span></td>
          </tr>
        </tbody>
      </table> }
    </div>
  );
};
}
export default ApplyRegularize;

// import React, { useState } from "react";
// import Navbar from "../Navbar";
// const ApplyRegularize = () => {
//   const [show, setShow] = useState(false);
//   const [applyregularize, this.setState] = useState({
//     approver: "hr",
//     reason: "work from home",
//     date: "",
//     checkin: "",
//     checkout: "",
//   });
//   const approverHandler = (e: any) => {
//     setApplyRegularize({ ...applyregularize, approver: e.target.value });
//   };
//   const reasonHandler = (e: any) => {
//     setApplyRegularize({ ...applyregularize, reason: e.target.value });
//   };
//   const dateHandler = (e:any) =>{
//       setApplyRegularize({...applyregularize, date:e.target.value});
//   }
//   const checkinHandler = (e:any)=>{
//       setApplyRegularize({...applyregularize, checkin:e.target.value});
//   }
//   const checkoutHandler = (e:any) =>{
//       setApplyRegularize({...applyregularize,checkout:e.target.value});
//   }
//   const regularizesubmitHandler = () => {
//     localStorage.setItem("regularize", JSON.stringify(applyregularize));
//     setShow(true);
//   };
//   return (
//     <div>
//       <Navbar />
//       {!show && <form onSubmit={regularizesubmitHandler}>
//         <span>Select Lead/Approver:- </span>
//         <select
//           value={applyregularize.approver}
//           onChange={approverHandler}
//           style={{ marginTop: "10px" }}
//         >
//           <option value="hr">HR</option>
//           <option value="department head">DEPARTMENT HEAD</option>
//           <option value="team leader">TEAM LEADER</option>
//           <option value="senior manager">SENIOR MANAGER</option>
//           <option value="manager">MANAGER</option>
//         </select>
//         <br />
//         <span>Date:- </span>
//         <input
//           type="text"
//           name="date"
//           value={applyregularize.date}
//           onChange={dateHandler}
//           style={{ marginTop: "10px" }}
//         />
//         <span> YYYY-MM-DD</span>
//         <br />
//         <span>Check In:- </span>
//         <input
//           type="text"
//           name="checkin"
//           value={applyregularize.checkin}
//           style={{ marginTop: "10px" }}
//           onChange={checkinHandler}
//         />
//         <span> HH:MM:SS (24 hrs format)</span>
//         <br />
//         <span>Check Out:- </span>
//         <input
//           type="text"
//           name="checkout"
//           value={applyregularize.checkout}
//           style={{ marginTop: "10px" }}
//           onChange={checkoutHandler}
//         />
//         <span> HH:MM:SS (24 hrs format)</span>
//         <br />
//         <span>Reason:- </span>
//         <select
//           value={applyregularize.reason}
//           onChange={reasonHandler}
//           style={{ marginTop: "10px" }}
//         >
//           <option value="work from home">WORK FROM HOME</option>
//           <option value="on site">ON SITE</option>
//           <option value="half day">HALF DAY</option>
//           <option value="present">PRESENT</option>
//         </select>
//         <br />
//         <input
//           type="submit"
//           value="Apply"
//           style={{
//             backgroundColor: "cornflowerblue",
//             marginTop: "10px",
//             color: "white",
//             border: "none",
//             fontSize: "15px",
//           }}
//         />
//       </form>}
//       {show && <span style={{color:"green"}}>Regulaize Request sent successfully</span>}
//     </div>
//   );
// };

// export default ApplyRegularize;
