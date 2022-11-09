import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./Landing.css";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";
// import {GitHub_Repository} from "../Route/GitHub_Repository";
import { ReposContext } from "../ReposContext";

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Landing() {
  const{user}=useContext(ReposContext)
  useEffect(()=>{
    fetch('https://api.github.com/users/'+user)
    .then(res=>res.json())
    .then(data=>setUserData(data))
}, [])

const[userData,setUserData]=useState(null)
console.log(user)

  return (
    <div className="landing">
      <div className="landing--container">
        <div className="landing--container-left">
          <div className="socials">

            {/* add the social media icons */}
           <p className="social_text"> View my social media profiles</p>
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin className="landing--social" aria-label="LinkedIn" />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub className="landing--social" aria-label="GitHub" />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter className="landing--social" aria-label="Twitter" />
              </a>
            )}
          </div>
        </div>
        {/* <img src={headerData.image} alt="" className="landing--img" /> */}
          <img src={userData?.avatar_url} alt="" className="landing--img" />
        <div className="landing--container-right">
          <div className="lcr--content">

    {/* data from the imported headerData object is used */}
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="resumeBtn">Download CV</button>
                </a>
              )}
              <Link
                to="../Route/GitHub_Repository"
                smooth={true}
                spy="true"
                duration={2000}
              >
                <button className="repoBtn">
                  GitHub Repository
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
