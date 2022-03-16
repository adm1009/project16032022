import React, { Component } from "react";
import Calendar from "react-calendar";
import Navbar from "../Navbar";
import { Navigate} from "react-router-dom";
class MonthlyAttendance extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedin =true;
    if(token === null){
      loggedin =false
    }
    this.state = {
      date: new Date(),
      loggedin
    };
  }

  onChange = (date: any) => this.setState({ date });

  render() {
    if (this.state.loggedin === false) return(<Navigate to="/"/>)
    return (
      <div>
        <Navbar />
        <span style={{ textDecoration: "underline" }}>Monthly Attendance</span>
        <hr />
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}
export default MonthlyAttendance;
// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import dayjs from "dayjs";
// import Navbar from "../Navbar";
// class MonthlyAttendance extends React.Component<any,any> {
//     constructor(props:any){
//         super(props);
//         this.state ={
//             date:new Date()
//         }
//     }
//     dateHandler =()=>{
//       this.setState({date:new Date()})
//     }
//   rener(){
//   return (
//     <div>
//       <Navbar />
//       <span style={{ textDecoration: "underline" }}>Monthly Attendance</span>
//       <hr />
//       <div style={{marginLeft:"450px"}}>
//       <Calendar
//         onChange={this.dateHandler}
//         value={this.state.date}
//         maxDate={new Date()}
//         formatDay={(this.state.locale, this.state.date) => dayjs(this.state.date).format("DD")}
//         />
//         </div>
//     </div>
//   );
// }
// }
// export default MonthlyAttendance;
// import React, {useState} from 'react';
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css'
// import Navbar from '../Navbar';

// const MonthlyAttendance = () => {
//     const [date, setDate] = useState(new Date());
//     const locale = 'fr-CA';
//     return (
//         <div>
//             <Navbar />
//             <span style={{textDecoration:"underline"}}>Monthly Attendance</span>
//             <hr />
//             <div style={{textAlign:"center"}}>
//             <Calendar

//                 onChange={setDate}
//                 value={date}
//                 maxDate={new Date()}
//                 formatDay ={
//                   (date:any) => new Intl.DateTimeFormat(
//                     locale,
//                     {
//                       month: "2-digit",
//                       day: "2-digit"
//                     }).format(date)
//                   }
//                  />
//                  </div>
//         </div>
//     );
// };

// export default MonthlyAttendance;
// import React from 'react'
// import Navbar from '../Navbar'
// import {useState} from 'react';
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
// const MonthlyAttendance = () => {
//     const [date, setDate] = useState(new Date());
//   return (<>
//       <Navbar/>
//     <span style={{textDecoration:"underline"}}>Monthly Attendance</span>
//     <hr />
//       <div>
//           <Calendar
//               onChange={setDate}
//               value={date}
//               maxDate={new Date()}
//               formatDay ={(locale, date) => dayjs(date).format('YYYY-MM-DD')}
//           />
//       </div>
//   );
// }
//     </>
//   )
// }

// export default MonthlyAttendance
