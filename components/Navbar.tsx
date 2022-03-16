import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends React.Component<any,any> {
  constructor(props:any){
    super(props)
    this.state = {
      personalData:false,
      leaveData:false,
      employeeData:false
    };
  }
    personalHandler =() =>
    {
      this.setState({
        personalData:true,
        leaveData:false,
        employeeData:false
      })
    }
    leaveHandler = () =>{
      this.setState({
        leaveData:true,
        personalData:false,
        employeeData:false
      })
    }
    employeeHandler = () =>{
      this.setState({
        employeeData:true,
        leaveData:false,
        personalData:false
      })
    }
    render(){
  return (
    <div>
      <Link to="/logout" style={{marginLeft:"1200px"}}>Logout</Link>
      <nav className="navback">
        <h3 className="heading" ><button className="buttons"onClick={this.personalHandler}>Personal Details:-</button></h3>
        <h3 className="heading"><button className="buttons" onClick={this.leaveHandler}>Leave Details:-</button></h3>
        <h3 className="heading"><button className="buttons" onClick={this.employeeHandler}>Employee Details:-</button></h3>
      </nav>
      <nav className="nestedall">
      <h3>{this.state.personalData && <Link to="/home/personalinformation"><button className="buttons">Personal Information</button></Link>}</h3>
      <h3>{this.state.personalData && <Link to="/home/bankdetails"><button className="buttons">Bank Details</button></Link>}</h3>
      <h3>{this.state.personalData && <Link to="/home/emergencycontact"><button className="buttons">Emergency Contact</button></Link>}</h3>
      <h3>{this.state.personalData && <Link to="/home/infogen"><button className="buttons">Infogen Details</button></Link>}</h3>
      <h3>{this.state.leaveData && <Link to="/home/leave"><button className="buttons">Attendance Regularization</button></Link>}</h3>
      <h3>{this.state.employeeData && <Link to="/home/dailyattendance"><button className="buttons">Daily Attendance</button></Link>}</h3>
      <h3>{this.state.employeeData && <Link to="/home/dailytask"><button className="buttons">Daily Task</button></Link>}</h3>
      <h3>{this.state.employeeData && <Link to="/home/employeeappraisalform"><button className="buttons">Employee Appraisal Form</button></Link>}</h3>
      <h3>{this.state.employeeData && <Link to="/home/leavedata"><button className="buttons">Leave Details</button></Link>}</h3>
      <h3>{this.state.employeeData && <Link to="/home/monthlyattendance"><button className="buttons">Monthly Attendance</button></Link>}</h3>
      </nav>
    </div>
  );
};
}
export default Navbar;
// import React, { useState } from "react";
// import { Link,Routes,Route, BrowserRouter } from "react-router-dom";
// import "./Navbar.css";
// import BankDetails from "./personal/BankDetails";
// import EmergencyContact from "./personal/EmergencyContact";
// import Infogen from "./personal/Infogen";
// import PersonalInformation from "./personal/PersonalInformation";
// const Navbar = () => {
//     const [personalData,setPersonalData] =useState(false);
//     const [leaveData,setLeaveData] =useState(false);
//     const personalHandler =() =>
//     {
//         setPersonalData(true);
//         setLeaveData(false);
//     }
//     const leaveHandler = () =>{
//         setLeaveData(true);
//         setPersonalData(false);
//     }
//   return (
//     <div>
//       <Link to="/logout" style={{marginLeft:"1200px"}}>Logout</Link>
//       <nav className="navback">
//         <h3 className="heading" ><button className="buttons"onClick={personalHandler}>Personal Details:-</button></h3>
//         <h3 className="heading"><button className="buttons" onClick={leaveHandler}>Leave Details:-</button></h3>
//         <h3 className="heading"><button className="buttons">Employee Details:-</button></h3>
//         <h3 className="heading"><button className="buttons">My Account:-</button></h3>
//       </nav>
//       <nav className="nestedall">
//       <h3>{personalData && <Link to="/home/personalinformation"><button className="buttons">Personal Information</button></Link>}</h3>
//       <h3>{personalData && <Link to="/home/bankdetails"><button className="buttons">Bank Details</button></Link>}</h3>
//       <h3>{personalData && <Link to="/home/emergencycontact"><button className="buttons">Emergency Contact</button></Link>}</h3>
//       <h3>{personalData && <Link to="/home/infogen"><button className="buttons">Infogen Details</button></Link>}</h3>
//       <h3>{leaveData && <Link to="/home/leave"><button className="buttons">Attendance Regularization</button></Link>}</h3>
//       </nav>
      
//       {/* <Routes>
//           <Route path="personalinformation" element={<PersonalInformation/>} />
//           <Route path="bankdetails" element={<BankDetails/>} />
//           <Route path="emergencycontact" element={<EmergencyContact/>} />
//           <Route path="infogen" element={<Infogen/>} />
//       </Routes>
//        */}
//     </div>
//   );
// };

// export default Navbar;
