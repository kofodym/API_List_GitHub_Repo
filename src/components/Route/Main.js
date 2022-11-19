import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Landing } from "../../components";

import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
        <meta name="description" content="KofoCole github profile" />
      </Helmet>
      
      {/* Other components of the front page layout */}
      <Landing />
      <Footer />
    </div>
  );
}
export default Main;
