import React from "react";
import ProjectImage from '../assets/Images/Project.png'
import ProjectImage2 from "../assets/Images/Project2.png";
import Image from "../assets/Images/About.svg";

const Project = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center Projects p-2">
        <p className="fs-3 border border-2 border-dark px-3">Projects</p>
        <img src={Image} alt="" className="my-4" />
        <small className="text-muted w-50 text-center">
          Check out my responsive projects, built using HTML, CSS, Bootstrap,
          JavaScript, and React. One of them is my portfolio, which you may have
          already visited—it's also fully responsive.
        </small>
      </div>
      <div
        id="carouselExample"
        className="carousel slide  Projects"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner  p-5">
          <div className="carousel-item active" data-bs-interval="10000">
            <a href="https://local-bar.netlify.app/" target="_blank">
              <img src={ProjectImage} className=" Projectimg" alt="Phone" loading="Loading Project" />
            </a>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <a href="https://educational-ba7cb6.netlify.app/" target="blank">
              <img src={ProjectImage2} className=" Projectimg" alt="Address" loading="Loading Project"/>
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon text-dark"></span>
        </button>
      </div>
    </>
  );
};

export default Project;
