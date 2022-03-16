import React from "react";
import Navbar from "../Navbar";
import { Navigate} from "react-router-dom";
class MyRegularize extends React.Component<any,any>{
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
  data = localStorage.getItem("regularizedetails");
  render(){
    if (this.state.loggedin === false) return(<Navigate to="/"/>)
  if (!this.data)
    {return (
      <div>
        <Navbar />
        <span style={{ textDecoration: "underline" }}>My Regularization</span>
        <hr />
        <span style={{ color: "green" }}>Nothing in Regularizartion</span>
      </div>
    );
    } 
  return (
    <>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>My Regularization</span>
      <hr />
      <span>{this.data}</span>
    </>
  );
};
}
export default MyRegularize;
// import React from "react";
// import Navbar from "../Navbar";
// const MyRegularize = () => {
//   const data = localStorage.getItem("regularize");
//   if (!data)
//     return (
//       <div>
//         <Navbar />
//         <span style={{ textDecoration: "underline" }}>My Regularization</span>
//         <hr />
//         <span style={{ color: "green" }}>Nothing in Regularizartion</span>
//       </div>
//     );
//   return (
//     <>
//       <Navbar />
//       <span style={{ textDecoration: "underline" }}>My Regularization</span>
//       <hr />
//       <span>{data}</span>
//     </>
//   );
// };

// export default MyRegularize;
