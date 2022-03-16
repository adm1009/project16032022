import { render } from "@testing-library/react";
import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate,Link} from "react-router-dom";
class EmployeeAppraisalForm extends React.Component<any,any>  {
    constructor(props:any){
        super(props);
        const token = localStorage.getItem("token");
    let loggedin =true;
    if(token === null){
      loggedin =false
    }
        this.state = {
            duration: "",
        goals: "",
        skills: "",
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
          <Navigate to="/home/employeeappraisalform"/>
        }
  render(){
    if (this.state.loggedin === false) return(<Navigate to="/"/>)
  return (
    <>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>EmployeeAppraisalForm</span>
      <hr />
      {!this.state.show && <form onSubmit={this.submitForm}>
        <span>Appraisal Duration:- </span><input
          type="text"
          value={this.state.duration}
          onChange={this.onChange}
          name="duration"
          style={{ margin: "10px" }}
        /> <br />
        <span>Selected Goals:-</span> <input
          type="text"
          value={this.state.goals}
          onChange={this.onChange}
          name="goals"
          style={{ margin: "10px" }}
        /> <br />
         <span>Selected Skills:- </span><input
          type="text"
          value={this.state.skills}
          onChange={this.onChange}
          name="skills"
          style={{ margin: "10px" }}
        /> <br />
        <input type="submit" value="Finalize" style={{
              backgroundColor: "cornflowerblue",
              marginTop: "10px",
              color: "white",
              border: "none",
              fontSize: "15px",
            }}/>
      </form>}
      {this.state.show && <span style={{color:"green"}}>Appraisal Data Added Successfully</span>}
      {this.state.show && <table style={{marginLeft:"430px"}}>
          <thead>
              <tr>
                  <td><h3>AppraisalDuration </h3></td>
                  <td><h3>SelectedGoals </h3></td>
                  <td><h3>SelectedSkills </h3></td>
                  <td><h3>Edit </h3></td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{this.state.duration}</td>
                  <td>{this.state.goals}</td>
                  <td>{this.state.skills}</td>
                  <td><span onClick={this.editHandler}><Link to="/home/employeeappraisalform">Edit</Link></span></td>

              </tr>
          </tbody>
      </table> }
    </>
  );
};
}
export default EmployeeAppraisalForm;
// import React, { useState } from "react";
// import Navbar from "../Navbar";
// const data = () =>{
//     const employ = localStorage.getItem("employeedata");
//     if(!employ)return{
//         duration: "",
//         goals: "",
//         skills: "",
//       }
//       return JSON.parse(employ);
// }
// const EmployeeAppraisalForm = () => {
//     const[show,setShow] =useState(false);
//   const [appraisal, setAppraisal] = useState(data);
//   const durationHandler = (e: any) => {
//     setAppraisal({ ...appraisal, duration: e.target.value });
//   };
//   const goalsHandler = (e: any) => {
//     setAppraisal({ ...appraisal, goals: e.target.value });
//   };
//   const skillsHandler = (e: any) => {
//     setAppraisal({ ...appraisal, skills: e.target.value });
//   };
//   const employeeDataSubmitHandler = () =>{
//       localStorage.setItem("employeedata",JSON.stringify(appraisal))
//       setShow(true);
//   }
//   return (
//     <>
//       <Navbar />
//       <span style={{ textDecoration: "underline" }}>EmployeeAppraisalForm</span>
//       <hr />
//       {!show && <form onSubmit={employeeDataSubmitHandler}>
//         <span>Appraisal Duration:- </span><input
//           type="text"
//           value={appraisal.duration}
//           onChange={durationHandler}
//           name="duration"
//           style={{ margin: "10px" }}
//         /> <br />
//         <span>Selected Goals:-</span> <input
//           type="text"
//           value={appraisal.goals}
//           onChange={goalsHandler}
//           name="goals"
//           style={{ margin: "10px" }}
//         /> <br />
//          <span>Selected Skills:- </span><input
//           type="text"
//           value={appraisal.skills}
//           onChange={skillsHandler}
//           name="skills"
//           style={{ margin: "10px" }}
//         /> <br />
//         <input type="submit" value="Finalize" style={{
//               backgroundColor: "cornflowerblue",
//               marginTop: "10px",
//               color: "white",
//               border: "none",
//               fontSize: "15px",
//             }}/>
//       </form>}
//       {show && <span style={{color:"green"}}>Appraisal Data Added Successfully</span>}
//     </>
//   );
// };

// export default EmployeeAppraisalForm;
