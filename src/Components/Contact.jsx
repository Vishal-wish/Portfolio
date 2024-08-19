import React from "react";
import Phone from "../assets/Images/Phone.svg";
import Email from "../assets/Images/Email2.svg";
import Address from "../assets/Images/Address.svg";

const Contact = () => {
  return (
    <div className="bg-dark ">
      <div className="container Contact align-content-center">
        <small className="p-2 text-center"><img src={Phone} className="ContactIcon"/><a href="" className=" text-decoration-none text-light p-2">8628074828  </a></small>
        <small className="p-2 text-center"><img src={Email} className="ContactIcon"/><a href="mailto:vishal.kumarr1910@gmail.com" className=" text-decoration-none text-light p-2">vishal.kumarr1910@gmail.com</a></small>
        <small className="p-2 text-center"><img src={Address} className="ContactIcon"/><a href="https://maps.app.goo.gl/VUz9jz3Ck2nxdg4w7" className=" text-decoration-none text-light p-2">Hamirpur(H.P.) India</a></small>
     </div>
    </div>
  );
};

export default Contact;
