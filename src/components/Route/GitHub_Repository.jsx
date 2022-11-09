import { Router,Switch, Route } from "react-router-dom";
import ReposComponent from "../ReposComponent";
import RepoPage from "./RepoPage";
import { Helmet } from "react-helmet";

function GitHub_Repository() {
  return (
    <div>
      <Helmet>
        <title>My GitHub Repos</title>
        <meta
          name="description"
          content="This shows a list of all of Kofoworola Cole's GitHub Repos"
        />
        <link rel="canonical" href="/repos" />
      </Helmet>
      <main>
        <Router>
          <Switch>
            <Route index element={<ReposComponent />} />
            <Route path=":name" element={<RepoPage />} />

          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default GitHub_Repository;
