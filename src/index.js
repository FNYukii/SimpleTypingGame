import React from "react";
import ReactDOM from "react-dom";
import HeaderDiv from "./components/HeaderDiv";
import FooterDiv from "./components/FooterDiv";

// alert("hello");

ReactDOM.render(
  <React.StrictMode>
    <HeaderDiv />
  </React.StrictMode>,
  document.getElementsByTagName("header")[0]
);

ReactDOM.render(
 <React.StrictMode>
   <FooterDiv />
 </React.StrictMode>,
  document.getElementsByTagName("footer")[0]
);