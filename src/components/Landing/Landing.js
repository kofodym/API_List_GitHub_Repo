import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./Landing.css";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import { ReposContext } from "../ReposContext";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SlUserFollowing, SlUserFollow } from "react-icons/sl";
import { BiGitRepoForked } from "react-icons/bi";

function Landing() {
  const { user } = useContext(ReposContext);
  const [userData, setUserData] = useState(null);
  // const {user} = useContext(ReposContext);


  useEffect(() => {
    const FetchData = async () => {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      return setUserData(data);
    };
    FetchData();
  }, [user]);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${user}`)
  //     .then((res) => res.json())
  //     .then((data) => setUserData(data));
  // }, [user]);

  console.log(user);

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
        {/* <img
          src={userData.avatar_url}
          alt="githubuser"
          className="landing--img"
        /> */}

<img src={userData?.avatar_url} alt="githubuser"
          className="landing--img" />

        <div className="landing--container-right">
          <div className="lcr--content">
            {/* data from the imported headerData object is used */}
            <h6>{headerData?.title}</h6>
            <h1 className="username">{userData?.name}</h1>

            <div className="profile-details">
              <p className="fullname">Username: {userData?.login}</p>
              <p className="fullname">{user?.bio}</p>
              <p>{headerData.desciption}</p>
              <p className="followers">
                <SlUserFollow />
                Followers: <span>{userData?.followers}</span>
              </p>
              <p className="followers">
                <SlUserFollowing />
                Following: <span>{userData?.following}</span>
              </p>
              <p className="public_repos">
                <BiGitRepoForked /> Public repos:{" "}
                <span>{userData?.public_repos}</span>
              </p>
            </div>

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
                to="../Route/GitRepo"
                smooth={true}
                spy="true"
                duration={2000}
              >
                <button className="repoBtn">GitHub Repository</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
