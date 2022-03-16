
import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
class Infogen extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    const token = localStorage.getItem("token");
    let loggedin =true;
    if(token === null){
      loggedin =false
    }
    this.state = {
      skillexp: "",
      skillknow: "",
      yearofexp: "",
      resume: "",
      certificate: "",
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
    localStorage.setItem("infogendetails", JSON.stringify(this.state));
    this.setState({
      show:true
    })
  };
  editHandler = () =>{
    this.setState({
      show:false
    });
    <Navigate to="/home/infogen"/>
  }
  render(){
    if (this.state.loggedin === false) return(<Navigate to="/"/>)
  return (
    <div>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>
        Personal Information Details
      </span>
      <hr />
      {!this.state.show && (
        <form onSubmit={this.submitForm}>
          <span>Skill(Experience):- </span>
          <input
            type="text"
            name="skillexp"
            style={{ margin: "10px" }}
            value={this.state.skillexp}
            onChange={this.onChange}
          />
          <br />
          <span>Skill(Knowledge):- </span>
          <input
            type="text"
            name="skillknow"
            style={{ margin: "10px" }}
            value={this.state.skillknow}
            onChange={this.onChange}
          />
          <br />
          <span>Years Of Experience:- </span>
          <input
            type="text"
            name="yearofexp"
            style={{ margin: "10px" }}
            value={this.state.yearofexp}
            onChange={this.onChange}
          />
          <br />
          <span>Resume:- </span>
          <input
            type="file"
            name="resume"
            accept="application/pdf"
            style={{ margin: "10px" }}
            value={this.state.resume}
            onChange={this.onChange}
          />
          <br />
          <span>Certification(Certification Name:Date):- </span>
          <input
            type="text"
            name="certificate"
            style={{ margin: "10px" }}
            value={this.state.certificate}
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
          <br />
        </form>
      )}
      {this.state.show && <span style={{ color: "green" }}>Infogen data added successfully</span>}
      {this.state.show && <table style={{marginLeft:"350px"}}>
        <thead>
          <tr>
            <td><h3>Skill Experience </h3></td>
            <td><h3>Skill knowledge </h3></td>
            <td><h3>Year Of Experience </h3></td>
            <td><h3>Certificate </h3></td>
            <td>
              <h3>Edit </h3>
            </td>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.skillexp}</td>
              <td>{this.state.skillknow}</td>
              <td>{this.state.yearofexp}</td>
              <td>{this.state.certificate}</td>
              <td><span onClick={this.editHandler}><Link to="/home/infogen">Edit</Link></span></td>
            </tr>
          </tbody>
        </table>}
    </div>
  );
};
}
export default Infogen;
// import React, { useState } from "react";
// import Navbar from "../Navbar";
// const infodata = () => {
//   const data = localStorage.getItem("infodata");
//   if (!data)
//     return {
//       skillexp: "",
//       skillknow: "",
//       yearofexp: "",
//       resume: "",
//       certificate: "",
//     };
//   return JSON.parse(data);
// };
// const Infogen = () => {
//   const [show, setShow] = useState(false);
//   const [infogenData, setInfogenData] = useState(infodata);
//   const skillexpHandler = (e: any) => {
//     setInfogenData({ ...infogenData, skillexp: e.target.value });
//   };
//   const skillknowHandler = (e: any) => {
//     setInfogenData({ ...infogenData, skillknow: e.target.value });
//   };
//   const yearofexpHandler = (e: any) => {
//     setInfogenData({ ...infogenData, yearofexp: e.target.value });
//   };
//   const certificateHandler = (e: any) => {
//     setInfogenData({ ...infogenData, certificate: e.target.value });
//   };
//   const resumeHandler = (e: any) => {
//     setInfogenData({ ...infogenData, resume: e.target.value });
//   };
//   const infoDataSubmitHandler = () => {
//     localStorage.setItem("infodata", JSON.stringify(infogenData));
//     setShow(true);
//   };
//   return (
//     <div>
//       <Navbar />
//       <span style={{ textDecoration: "underline" }}>
//         Personal Information Details
//       </span>
//       <hr />
//       {!show && (
//         <form onSubmit={infoDataSubmitHandler}>
//           <span>Skill(Experience):- </span>
//           <input
//             type="text"
//             name="skillexp"
//             style={{ margin: "10px" }}
//             value={infogenData.skillexp}
//             onChange={skillexpHandler}
//           />
//           <br />
//           <span>Skill(Knowledge):- </span>
//           <input
//             type="text"
//             name="skillknow"
//             style={{ margin: "10px" }}
//             value={infogenData.skillknow}
//             onChange={skillknowHandler}
//           />
//           <br />
//           <span>Years Of Experience:- </span>
//           <input
//             type="text"
//             name="yearofexp"
//             style={{ margin: "10px" }}
//             value={infogenData.yearofexp}
//             onChange={yearofexpHandler}
//           />
//           <br />
//           <span>Resume:- </span>
//           <input
//             type="file"
//             name="resume"
//             accept="application/pdf"
//             style={{ margin: "10px" }}
//             value={infogenData.resume}
//             onChange={resumeHandler}
//           />
//           <br />
//           <span>Certification(Certification Name:Date):- </span>
//           <input
//             type="text"
//             name="certificate"
//             style={{ margin: "10px" }}
//             value={infogenData.certificate}
//             onChange={certificateHandler}
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
//           <br />
//         </form>
//       )}
//       {show && <span style={{ color: "green" }}>Infogen data added successfully</span>}
//     </div>
//   );
// };

// export default Infogen;
