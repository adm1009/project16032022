import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate,Link} from "react-router-dom";

class DailyTask extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    const token = localStorage.getItem("token");
    let loggedin =true;
    if(token === null){
      loggedin =false
    }
    this.state = {
      project: "",
      task: "",
      time: "",
      status: "inprogress",
      blockingissue: "",
      responsibleperson: "",
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
    <Navigate to="/home/dailytask"/>
  }
  render(){
    if (this.state.loggedin === false) return(<Navigate to="/"/>)
  return (
    <>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>Daily Task Details</span>
      <hr />
      {!this.state.show && (
        <form onSubmit={this.submitForm}>
          <span>Project:- </span>
          <input
            type="text"
            name="project"
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.project}
          />
          <br />
          <span>Task:- </span>
          <input
            type="text"
            name="task"
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.task}
          />
          <br />
          <span>Time(in Hrs):- </span>
          <input
            type="text"
            name="time"
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.time}
          />
          <br />
          <span>Status:- </span>
          <select
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.status}
          >
            <option value="inprogress">in progress</option>
            <option value="completed">completed</option>
          </select>
          <br />
          <span>Blocking Issue:- </span>
          <input
            type="text"
            name="blockingissue"
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.blockingissue}
          />
          <br />
          <span>Responsible Person:- </span>
          <input
            type="text"
            name="responsibleperson"
            style={{ marginTop: "10px" }}
            onChange={this.onChange}
            value={this.state.responsibleperson}
          />
          <br />
          <input
            type="submit"
            value="Submit Task"
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
      {this.state.show && <span style={{ color: "green" }}>Daily Task updated!</span>}
      <br />
      {this.state.show && <table style={{marginLeft:"400px"}}>
        <thead>
          <tr>
            <td><h3>Project </h3></td>
            <td><h3>Task </h3></td>
            <td><h3>Time </h3></td>
            <td><h3>Status </h3></td>
            <td><h3>BlockingIssues </h3></td>
            <td><h3>ResponsiblePerson</h3></td>
            <td><h3>Edit</h3> </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.project}</td>
            <td>{this.state.task}</td>
            <td>{this.state.time}</td>
            <td>{this.state.status}</td>
            <td>{this.state.blockingissue}</td>
            <td>{this.state.responsibleperson}</td>
            <td><span onClick={this.editHandler}><Link to="/home/dailytask">Edit</Link></span></td>

          </tr>
        </tbody>
      </table> }
    </>
  );
};
}
export default DailyTask;
// import React, { useState } from 'react'
// import Navbar from '../Navbar'
// // const data = () =>{
// //     const daily = localStorage.getItem("dailyupdate");
// //     if(!daily)return{
// //         project:"",
// //         task:"",
// //         time:"",
// //         status:"inprogress",
// //         blockingissue:"",
// //         responsibleperson:""
// //     }
// //     return JSON.parse(daily)
// // }
// const DailyTask = () => {
//     const [task,setTask]=useState({
//                 project:"",
//                 task:"",
//                time:"",
//                 status:"inprogress",
//                 blockingissue:"",
//                 responsibleperson:""
//             })
//     const[show,setShow]=useState(false);
//     const projectHandler = (e:any) =>{
//         setTask({...task,project:e.target.value})
//     }
//     const taskHandler = (e:any) =>{
//         setTask({...task,task:e.target.value})
//     }
//     const timeHandler = (e:any) =>{
//         setTask({...task,time:e.target.value})
//     }
//     const statusHandler = (e:any) =>{
//         setTask({...task,status:e.target.value})
//     }
//     const blockingHandler = (e:any) =>{
//         setTask({...task,blockingissue:e.target.value})
//     }
//     const personHandler = (e:any) =>{
//         setTask({...task,responsibleperson:e.target.value})
//     }
//     const dailytasks = () =>{
//         localStorage.setItem("dailyupdate",JSON.stringify(task));
//         setShow(true);
//     }
//   return (<>
//   <Navbar />
//   <span style={{textDecoration:"underline"}}>Daily Task Details</span>
//   <hr />
//   {!show && <form onSubmit={dailytasks}>
//   <span>Project:- </span><input type="text" name="project" style={{marginTop:"10px"}} onChange={projectHandler} value={task.project}/><br />
//   <span>Task:- </span><input type="text" name='task' style={{marginTop:"10px"}} onChange={taskHandler} value={task.task}/><br />
//   <span>Time(in Hrs):- </span><input type="text" name="time" style={{marginTop:"10px"}} onChange={timeHandler} value={task.time}/><br />
//   <span>Status:- </span><select style={{marginTop:"10px"}} onChange={statusHandler} value={task.status}>
//         <option value="inprogress">in progress</option>
//         <option value="completed">completed</option>
//     </select><br />
//     <span>Blocking Issue:- </span><input type="text" name='blockinissue' style={{marginTop:"10px"}} onChange={blockingHandler} value={task.blockingissue}/><br />
//     <span>Responsible Person:- </span><input type="text" name='personresponisible' style={{marginTop:"10px"}} onChange={personHandler} value={task.responsibleperson}/><br />
//     <input type="submit" value="Submit Task" style={{
//               backgroundColor: "cornflowerblue",
//               marginTop: "10px",
//               color: "white",
//               border: "none",
//               fontSize: "15px",
//             }}/>
//     </form>}

//     {show && <span style={{color:"green"}}>Daily Task updated!</span> }
//     <br />
//     {show && localStorage.getItem("dailyupdate") }
//     </>
//   )
// }

// export default DailyTask
