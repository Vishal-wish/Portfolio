import React from "react";
import Image from "../assets/Images/Html.png";
import Image2 from "../assets/Images/Css.png";
import Image3 from "../assets/Images/JS.png";
import Image4 from "../assets/Images/bootstrap.png";
import Image5 from "../assets/Images/React.png";
import Image6 from "../assets/Images/jquery.svg";

const Skills = () => {
  return (
    <div className="Skills  p-4">
      <div className="d-flex justify-content-center">
        <p className="fs-2 border border-3 border-dark px-3 ">SKILL's</p>
      </div>
      <h3 className="container fs-3 w-50 p-2 fw-bolder">Using Now</h3>
      <div className="container p-4 SkillsMenu ">
        <div className="text-center">
          <img src={Image} alt="" />
          <p>HTML5</p>
        </div>
        <div className="text-center">
          <img src={Image2} alt="" />
          <p>CSS3</p>
        </div>
        <div className="text-center">
          <img src={Image3} alt="" />
          <p>Java Script</p>
        </div>
        <div className="text-center">
          <img src={Image6} alt="" />
          <p>Jquery</p>
        </div>
        <div className="text-center">
          <img src={Image4} alt="" />
          <p>HTML</p>
        </div>
        <div className="text-center">
          <img src={Image5} alt="" />
          <p>React</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
