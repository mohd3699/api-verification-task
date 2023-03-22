import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { APIContext } from "../context/APIContext";
import { routePaths } from "../utils/constants";

import "../styles/api-manual-verifier.styles.css";

export const APIManualVerifier = () => {
  const ctx = useContext(APIContext);

  const { clearAPIData } = ctx;

  return (
    <div className="apimanualverifier card">
      <h4>Auto Manual Verifier</h4>
      <div className="actions">
        <Link to={routePaths.view}>View</Link>
        <button onClick={clearAPIData}>Clear</button>
      </div>
    </div>
  );
};
