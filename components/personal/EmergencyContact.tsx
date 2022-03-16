import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
class EmergencyContact extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    const token = localStorage.getItem("token");
    let loggedin =true;
    if(token === null){
      loggedin =false
    }
    this.state = {
    firstpersonname: "",
    firstpersonno: "",
    secondpersoname: "",
    secondpersonno: "",
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
    localStorage.setItem("emergencydetails", JSON.stringify(this.state));
    this.setState({
      show:true
    })
  };
  editHandler = () =>{
    this.setState({
      show:false
    });
    <Navigate to="/home/emergencycontact"/>
  }
  render(){
    if (this.state.loggedin === false) return(<Navigate to="/"/>)
  return (
    <div>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>Emergency Contact</span>
      <hr />
      {!this.state.show && <form onSubmit={this.submitForm}>
      <span>Firstperson Name:- </span>
      <input
        type="text"
        value={this.state.firstpersonname}
        name="firstpersonname"
        style={{ marginTop: "10px" }}
        onChange={this.onChange}
      />
      <br />
      <span>Firstperson No:- </span>
      <input
        type="number"
        value={this.state.firstpersonno}
        name="firstpersonno"
        style={{ marginTop: "10px" }}
        onChange={this.onChange}
      />
      <br />
      <span>Secondperson Name:- </span>
      <input
        type="text"
        value={this.state.secondpersoname}
        name="secondpersoname"
        style={{ marginTop: "10px" }}
        onChange={this.onChange}
      />
      <br />
      <span>Secondperson No:- </span>
      <input
        type="number"
        value={this.state.secondpersonno}
        name="secondpersonno"
        style={{ marginTop: "10px" }}
        onChange={this.onChange}
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
      </form>}
      {this.state.show && <span style={{color:"green"}}>Emergency Data Added Successfully</span>}
      {this.state.show && <table style={{marginLeft:"300px"}}>
        <thead>
          <tr>
            <td><h3>Firstperson Name. </h3></td>
            <td><h3>Firstperson No. </h3></td>
            <td><h3>Secondperson Name. </h3></td>
            <td><h3>Secondperson No. </h3></td>
            <td>
              <h3>Edit </h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.firstpersonname}</td>
            <td>{this.state.firstpersonno}</td>
            <td>{this.state.secondpersoname}</td>
            <td>{this.state.secondpersonno}</td>
            <td><span onClick={this.editHandler}><Link to="/home/emergencycontact">Edit</Link></span></td>
          </tr>
        </tbody>
      </table> }
    </div>
  );
      }
};

export default EmergencyContact;
// import React, { useState } from "react";
// import Navbar from "../Navbar";
// const EmergencyData = () =>{
//   const emerData = localStorage.getItem("emergencydata")
//   if(!emerData) return{
//     firstpersonname: "",
//     firstpersonno: "",
//     secondpersoname: "",
//     secondpersonno: "",
//   };
//   return JSON.parse(emerData);
// }
// const EmergencyContact = () => {
//   const[show,setShow]=useState(false);
//   const [emergencyData, setEmergencyData] = useState(EmergencyData);
//   const firstnameHandler = (e:any) =>{
//     setEmergencyData({...emergencyData,firstpersonname:e.target.value})
//   }
//   const firstnoHandler = (e:any) =>{
//     setEmergencyData({...emergencyData,firstpersonno:e.target.value})
//   }
//   const secondnameHandler = (e:any) =>{
//     setEmergencyData({...emergencyData,secondpersoname:e.target.value})
//   }
//   const secondnoHandler = (e:any) =>{
//     setEmergencyData({...emergencyData,secondpersonno:e.target.value})
//   }
//   const emergencyHandler = () =>{
//     localStorage.setItem("emergencydata",JSON.stringify(emergencyData));
//     setShow(true);
//   }
//   return (
//     <div>
//       <Navbar />
//       <span style={{ textDecoration: "underline" }}>Emergency Contact</span>
//       <hr />
//       {!show && <form onSubmit={emergencyHandler}>
//       <span>Firstperson Name:- </span>
//       <input
//         type="text"
//         value={emergencyData.firstpersonname}
//         name="firstpersonname"
//         style={{ marginTop: "10px" }}
//         onChange={firstnameHandler}
//       />
//       <br />
//       <span>Firstperson No:- </span>
//       <input
//         type="number"
//         value={emergencyData.firstpersonno}
//         name="firstpersonno"
//         style={{ marginTop: "10px" }}
//         onChange={firstnoHandler}
//       />
//       <br />
//       <span>Secondperson Name:- </span>
//       <input
//         type="text"
//         value={emergencyData.secondpersoname}
//         name="secondpersoname"
//         style={{ marginTop: "10px" }}
//         onChange={secondnameHandler}
//       />
//       <br />
//       <span>Secondperson No:- </span>
//       <input
//         type="number"
//         value={emergencyData.secondpersonno}
//         name="secondpersonno"
//         style={{ marginTop: "10px" }}
//         onChange={secondnoHandler}
//       />
//       <br />
//       <input
//         type="submit"
//         value="Submit Data"
//         style={{
//           backgroundColor: "cornflowerblue",
//           marginTop: "10px",
//           color: "white",
//           border: "none",
//           fontSize: "15px",
//         }}
//       />
//       </form>}
//       {show && <span style={{color:"green"}}>Emergency Data Added Successfully</span>}
//     </div>
//   );
// };

// export default EmergencyContact;
