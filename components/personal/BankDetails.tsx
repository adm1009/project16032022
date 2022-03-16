import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../Navbar";

class BankDetails extends React.Component<any,any>{
  constructor(props:any){
    super(props);
    const token = localStorage.getItem("token");
    let loggedin =true;
    if(token === null){
      loggedin =false
    }
    this.state = {
      pancardno:"",
      accountno:"",
      bankname:"",
      show:false,
      bank:localStorage.getItem("bankdetails"),
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
    localStorage.setItem("bankdetails", JSON.stringify(this.state));
    this.setState({
      show:true
    })
  };
  editHandler = () =>{
    this.setState({
      show:false
    });
    <Navigate to="/home/bankdetails"/>
  }
  render(){
    if(this.state.loggedin === false)return (<Navigate to="/"/>)
  return (
    <div>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>Bank Details</span>
      <hr />
      {!this.state.show && (
        <form onSubmit={this.submitForm}>
          <span>Pancard No:- </span>
          <input
            type="text"
            value={this.state.pancardno}
            onChange={this.onChange}
            name="pancardno"
            style={{ marginTop: "10px" }}
          />{" "}
          <br />
          <span>Account No:- </span>
          <input
            type="text"
            value={this.state.accountno}
            onChange={this.onChange}
            name="accountno"
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Bank Name:- </span>
          <input
            type="text"
            value={this.state.bankname}
            onChange={this.onChange}
            name="bankname"
            style={{ marginTop: "10px" }}
          />
          <br />
          <input
            type="submit"
            value="Submit Data"
            style={{
              backgroundColor: "cornflowerblue",
              marginTop: "10px",
              color: "white",
              border: "none",
              fontSize: "15px",
            }}
          />
        </form>
      )}
      {this.state.show && (
        <span style={{ color: "green" }}>Bank Details Added Successfully</span>
      )}
      <br />
      {this.state.show && <table style={{marginLeft:"500px"}}>
        <thead>
          <tr>
            <td>
              <h3>Pancard No</h3>
            </td>
            <td>
              <h3>Account No</h3>
            </td>
            <td>
              <h3>Bank Name</h3>
            </td>
            <td>
              <h3>Edit </h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.pancardno}</td>
            <td>{this.state.accountno}</td>
            <td>{this.state.bankname}</td>
            <td><span onClick={this.editHandler}><Link to="/home/bankdetails">Edit</Link></span></td>
          </tr>
        </tbody>
      </table>}
    </div>
  );
};
}
export default BankDetails;

// import React, { useState } from "react";
// import Navbar from "../Navbar";

// const BankDetailsData = () => {
//   const Bank = localStorage.getItem("bankdetails");
//   if (!Bank)
//     return {
//       pancardno: "",
//       accountno: "",
//       bankname: "",
//     };
//   return JSON.parse(Bank);
// };
// const BankDetails = () => {
//   const [show, setShow] = useState(false);
//   const [bankData, setBankData] = useState(BankDetailsData);
//   const pancardHandler = (e: any) => {
//     setBankData({ ...bankData, pancardno: e.target.value });
//   };
//   const accountHandler = (e: any) => {
//     setBankData({ ...bankData, accountno: e.target.value });
//   };
//   const banknameHandler = (e: any) => {
//     setBankData({ ...bankData, bankname: e.target.value });
//   };
//   const bankDetailsHandler = () => {
//     localStorage.setItem("bankdetails", JSON.stringify(bankData));
//     setShow(true);
//   };
//   return (
//     <div>
//       <Navbar />
//       <span style={{ textDecoration: "underline" }}>Bank Details</span>
//       <hr />
//       {!show && (
//         <form onSubmit={bankDetailsHandler}>
//           <span>Pancard No:- </span>
//           <input
//             type="text"
//             value={bankData.pancardno}
//             onChange={pancardHandler}
//             name="pancardno"
//             style={{ marginTop: "10px" }}
//           />{" "}
//           <br />
//           <span>Account No:- </span>
//           <input
//             type="text"
//             value={bankData.accountno}
//             onChange={accountHandler}
//             name="accountno"
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>Bank Name:- </span>
//           <input
//             type="text"
//             value={bankData.bankname}
//             onChange={banknameHandler}
//             name="bankname"
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <input
//             type="submit"
//             value="Submit Data"
//             style={{
//               backgroundColor: "cornflowerblue",
//               marginTop: "10px",
//               color: "white",
//               border: "none",
//               fontSize: "15px",
//             }}
//           />
//         </form>
//       )}
//       {show && (
//         <span style={{ color: "green" }}>Bank Details Added Successfully</span>
//       )}
//     </div>
//   );
// };

// export default BankDetails;
