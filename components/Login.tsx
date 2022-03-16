
import React, { useState } from "react";
import { Navigate} from "react-router-dom";

class Login extends React.Component <any,any> {
  constructor(props:any){
    super(props);
    let loggedin = false
    this.state = {
      username:"",
      password:"",
      loggedin
    }
  }
  
 submitForm = (e: any) => {
    e.preventDefault();
    if (this.state.username === "adm1009" && this.state.password === "adm@1009") {
      localStorage.setItem("token","adm100997");
      this.setState({loggedin:true})
    } else {
      alert("enter valid details");
    }
  };
  render(){
    if(this.state.loggedin===true) {return (<Navigate to="/home"/>)}
  return (
    <div style={{ textAlign: "center" }}>
        <h3
          style={{
            color: "white",
            backgroundColor: "cornflowerblue",
            fontSize: "20px",
          }}
        >
          Welcome to Infogen Labs
        </h3>
    
        <>
          <h1 style={{ color: "purple", textDecoration: "underline" }}>
            Login
          </h1>
          <form onSubmit={this.submitForm}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={(e) => this.setState({username:e.target.value})}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.setState({password:e.target.value})}
            />
            <br />
            <input type="submit" value="Login" />
          </form>
        </>
     
    </div>
  );
};
}
export default Login;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedin, setLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   // const onchange = (e:string) =>{
//   //     setData({username:e.target.value, password})
//   // }
//   const submitForm = (e: any) => {
//     e.preventDefault();
//     //  const { username, password }= data;
//     if (username === "adm1009" && password === "adm@1009") {
//       setLoggedIn(true);
//     } else {
//       alert("enter valid details");
//     }
//   };
//   // const [componentRoutes, setComponentRoutes] = useState(null);
//   // const getSelectedValue = (val:any) => {
//   //   if (val === "personal") {
//   //     setComponentRoutes(<PersonalInformation/>);
//   //   } else if (val === "bank") {
//   //     setComponentRoutes(<BankDetails/>);
//   //   }
//   //   else if (val === "emergency") {
//   //     setComponentRoutes(<EmergencyContact/>);
//   //   }
//   //   else if (val === "infogen") {
//   //     setComponentRoutes(<Infogen/>);
//   //   }
//   // };
//   // if (loggedin) {
//   //   return navigate("/checkin");
//   // } else {
//   return (
//     <div style={{ textAlign: "center" }}>
//       {!loggedin && (
//         <h3
//           style={{
//             color: "white",
//             backgroundColor: "cornflowerblue",
//             fontSize: "20px",
//           }}
//         >
//           Welcome to Infogen Labs
//         </h3>
//       )}
//       {!loggedin && (
//         <>
//           <h1 style={{ color: "purple", textDecoration: "underline" }}>
//             Login
//           </h1>
//           <form onSubmit={submitForm}>
//             <input
//               type="text"
//               placeholder="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <br />
//             <input
//               type="password"
//               placeholder="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <br />
//             <input type="submit" value="Login" />
//           </form>
//         </>
//       )}
//       {loggedin && navigate("/home")}

//       {/* {loggedin && <DropdownPersonal options={[
//           { label: "Personal Information", value: "personal" },
//           { label: "Bank Details", value: "bank" },
//           { label: "Emergency Contact Details", value: "emergency" },
//           { label: "Infogen Details", value: "infogen" },
//         ]}
//         onChange={getSelectedValue}
//       />} */}
//       {/* // {componentRoutes && componentRoutes}} */}
//     </div>
//   );
// };

// export default Login;
