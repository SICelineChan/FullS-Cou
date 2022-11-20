import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// From React Tutorial
// These lines are for the
// const msgUnread = ReactDOM.createRoot(document.getElementById("msgUnread"));
// const element = (
//   <div>
//     <strong>
//       <h1>You have 25 unread messages to read!</h1>
//     </strong>
//     <h3>(👆 A variable in index.js)</h3>
//   </div>
// );
// msgUnread.render(element);

//This is the variable to reflect the number of msgs for the icon
// const msgUnreadIcon = ReactDOM.createRoot(
//   document.getElementById("msgUnreadIcon")
// );
// const msgIcon = <h1>{20 + 5}</h1>;
// msgUnreadIcon.render(msgIcon);

// Composing a Component

// const urgentMsgs = ReactDOM.createRoot(document.getElementById("urgentMsgs"));
// const ele = (
//   <h1>
//     {/* {""} */}
//     <strong>
//       But please read the {Math.floor(Math.random() * 10)} Urgent message/s!{" "}
//     </strong>{" "}
//   </h1>
// );
// urgentMsgs.render(ele);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
