import React from 'react';
import { Routes , Route} from "react-router-dom";
import ReposComponent from "../ReposComponent";
import RepoPage from "./RepoPage";
import { Helmet } from "react-helmet";

function GitRepo() {
  return (<div>
      <Helmet>
        <title>My GitHub Repos</title>
        <meta
          name="description"
          content="This shows a list of all of Kofoworola Cole's GitHub Repos"
        />
        <link rel="canonical" href="/repos" />
      </Helmet>
      <main>
        <Routes>
          <Route index element={<ReposComponent />} />
          <Route path=":name" element={<RepoPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default GitRepo;
