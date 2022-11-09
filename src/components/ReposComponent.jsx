import React from "react";
import { useState, useEffect,useContext} from "react";
import {  Link } from "react-router-dom";
import { ReposContext } from "./ReposContext";
import ReturnButton from "./ReturnButton";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";



function ReposComponent() {
 

    //extract the repos array by consuming the context
    const {repos}=useContext(ReposContext)


  //set up pagination
  let perPage=5
  const[currentPage,setCurrentPage]=useState(1)
  let startingIndex=currentPage *perPage -perPage
  let endingIndex=currentPage *perPage
  let currentRepos=repos.slice(startingIndex,endingIndex)
  let toTal = Math.ceil(repos.length / perPage);


  return (
    <section className="repos-container">
      <div className="btn-wrapper">
        <ReturnButton />
      </div>
      <div className="repos">
        {currentRepos?.map((repo) => {
          return (
            <Link className="repo" to={repo.name} key={repo.id}>
              <h3 className="name">{repo.name}</h3>
              <p className="description">{repo.description}</p>
              {/* <p className="description">{repo.description}</p> */}
              <p className="language">{repo.language}</p>
            </Link>
          );
        })}
      </div>

      <div className="pagination">
        <div className="buttons">
          <button
            className="previous"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage <= 1}
            aria-disabled={currentPage <= 1}
          >
            <FaAngleLeft />
          </button>

          <button
            className="previous"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= toTal}
            aria-disabled={currentPage >= toTal}
          >
            <FaAngleRight />
          </button>
        </div>
        <div className="pages">
          {new Array(toTal).fill().map((_, idx) => {
            return (
              <button
                style={
                  currentPage === idx + 1
                    ? { backgroundColor: "#000", color: "#fff" }
                    : {}
                }
                onClick={() => setCurrentPage(idx + 1)}
                key={idx}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ReposComponent;
