import React from "react";
import "./homepage.styles.scss";
import "../../components/directory/directory.component";
import Directory from "../../components/directory/directory.component";
const HomePage = ({ history }) => (
  <div className="homepage">
    <Directory history={history} />
  </div>
);

export default HomePage;
