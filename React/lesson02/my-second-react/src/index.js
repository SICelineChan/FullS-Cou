import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppNo2 from "./AppNo2";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const aName = ReactDOM.createRoot(document.getElementById("aName"));
aName.render(
  <React.StrictMode>
    <AppNo2 />
  </React.StrictMode>
);
// From React Tutorial
// These lines are for the
const msgUnread = ReactDOM.createRoot(document.getElementById("msgUnread"));
const element = (
  <div>
    <strong>
      <h1>You have 25 unread messages to read!</h1>
    </strong>
    <h3>(👆 A variable in index.js)</h3>
  </div>
);
msgUnread.render(element);

//This is the variable to reflect the number of msgs for the icon
const msgUnreadIcon = ReactDOM.createRoot(
  document.getElementById("msgUnreadIcon")
);
const msgIcon = <h1>25</h1>;
msgUnreadIcon.render(msgIcon);

// Composing a Component
function UrgentAction(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "lavender",
          fontSize: "15px",
        }}
      >
        <h1>and also don't forget the {props.digit} unread messages</h1>
        <p>that {props.person} will double check on you!</p>
      </div>
      <p
        style={{
          color: "darkcyan",
          fontSize: "12px",
        }}
      >
        This is inside a Component but within the index.js! But the top sentence
        is a variable also inside index.js!
      </p>
    </>
  );
}
const urgentMsgs = ReactDOM.createRoot(document.getElementById("urgentMsgs"));
const ele = (
  <h1>
    {/* {""} */}
    <strong>But please read the {10 + 2} Urgent messages! </strong>{" "}
    <UrgentAction digit="25" person="The Big Boss" />
  </h1>
);
urgentMsgs.render(ele);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();