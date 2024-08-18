import React from "react";
import Image1 from "../assets/Images/Email.svg";
import Image2 from "../assets/Images/Git.svg";
import Image3 from "../assets/Images/Linkdin.svg";
import Image4 from "../assets/Images/Image.png";

const Home = () => {
  return (
    <>
      <div className="container-fluid Homebg d-flex justify-content-start px-0">

        <div className="HomeText">

          <div className="pb-3" >
            <p className="fs-3 m-0">Hi, I am </p>
            <p className="fw-bolder m-0" style={{ fontSize: "3.5rem" }}>
              Vishal
            </p>
            <p className=" HomeTextmuted ">Front-end Designer / Developer</p>

            <div>
              <a href="mailto:vishalkumar1910@gmail.com" className=" border-0 p-2 ">
                <img src={Image1} alt=""  />
              </a>
              <a href="https://github.com/Vishal-wish" target="blank" className=" border-0 p-2 ">
                <img src={Image2} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/vishal-kumar-b330b8171/" target="blank" className=" border-0 p-2 ">
                <img src={Image3} alt="" />
              </a>
            </div>
            
          </div>

        </div>

        <div className=" d-flex HomeImagebg">
          <img src={Image4} alt="" className="HomeImage" loading="Loading Image" />
        </div>
      </div>
    </>
  );
};

export default Home;
