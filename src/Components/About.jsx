import React from "react";
import Image from "../assets/Images/About.svg";

const About = () => {
  return (
    <div className="Aboutsection">
      <p className=" border border-2 border-dark px-2 my-5 fs-2 About">
        ABOUT ME
      </p>
      <small className="w-75 text-center text-muted tex About">
        I am a web developer skilled in HTML, CSS, JavaScript, React, Bootstrap,
        and jQuery. Through an internship at Excellence Technology, I gained
        practical experience in building responsive websites. I also completed a
        Java Full Stack course and hold a Python certification. Eager to
        contribute to exciting web development projects.
      </small>
      <p className=" About  fs-4 my-2">| EXPLORE |</p>
      <img src={Image} alt="" className="p-5" />
      <div className="container-md AboutMenu">
        <div className="p-3">
          <h3>Designer</h3>
          <small>
            As a web designer, I create sites tailored to your needs and
            suggestions. I'll collaborate with you throughout the entire process
            to ensure the best results.
          </small>
        </div>
        <div className="p-3">
          <h3>Developer</h3>
          <small>
            As a web developer, I craft sites that meet your specific needs,
            collaborating with you every step of the way to deliver exceptional
            results.{" "}
          </small>
        </div>
      </div>
      <img src={Image} alt="" className="p-5" />
    </div>
  );
};

export default About;
