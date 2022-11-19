import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ReturnButton from "../ReturnButton";
import { ReposContext } from "../ReposContext";
import { Helmet } from "react-helmet";
// import Star from "../assets/Star";
// import Fork from "../assets/fork";


function RepoPage() {
  const params = useParams();
  const [selectedRepo, setSelectedRepo] = useState([]);
  const [language, setLanguage] = useState(null);
  const{user}=useContext(ReposContext)


//fetches the selected repo
  useEffect(() => {
    fetch("https://api.github.com/repos/"+user+"/" + params.name)
      .then((data) => data.json())
      .then((res) => setSelectedRepo(res));
  }, [language, params.name, user]);

  //fetches the languages used in the repository


  useEffect(() => { 
    const FetchData = () => {
      return fetch(
        "https://api.github.com/repos/" + user + "/" +params.name + "/languages"
      )
        .then((data) => data.json())
        .then((res) => setLanguage(res));
    }

    FetchData()
   }, [params.name, user]);

  // useEffect(() => {
  //   fetch(
  //     "https://api.github.com/repos/" + user + "/" +params.name + "/languages"
  //   )
  //     .then((data) => data.json())
  //     .then((res) => setLanguage(res));
  // }, []);

  //generates the percentage of each language used 
  function setLanguagepercentage(langs) {
    const arrayLangs = Object.entries(langs);
    const total = arrayLangs.reduce((acc, item) => {
      return acc + parseInt(item[1]);
    }, 0);
    const percent = arrayLangs.reduce((acc, item) => {
      return [...acc, { [item[0]]: Math.floor((item[1] / total) * 100) }];
    }, []);

    return percent;
  }


  let languages = language && setLanguagepercentage(language);
 
  return (
    <>
      <Helmet>
        <title>{selectedRepo.name}</title>
        <meta name="description" content={selectedRepo.description} />
        <link rel="canonical" href={"/" + selectedRepo.name} />
      </Helmet>
      <main className="selected-repo">
        <div className="btn-wrapper">
          <ReturnButton />
        </div>
        <h1>{selectedRepo.name}</h1>
        <p>
          <span>Author: </span>
          {selectedRepo.owner?.login}
        </p>
        <p className="repo-descripion">
          <span>Description: </span>
          {selectedRepo.description}
        </p>
        <p className="created">
          <span>created on: </span>
          {new Date(selectedRepo.created_at).toDateString()}
        </p>
        <p className="size">
          <span>Repo size:</span> {selectedRepo.size} kb
        </p>
        <div className="languages">
          <span>Languages :</span>
          {languages?.map((language) => {
            return (
              <p key={Object.keys(language)[0]}>
                <span>{Object.keys(language)[0]}</span>

                <span>{Object.values(language)[0] + "%"}</span>
                <br />
              </p>
            );
          })}
        </div>
        <a className="btn" href={selectedRepo.html_url}>
          go to repo
        </a>
      </main>
    </>
  );
}

export default RepoPage;
