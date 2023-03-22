import React, { useContext } from "react";
import { APIContext } from "../context/APIContext";

import "../styles/api-auto-verifier.styles.css";

export const APIAutoVerifier = () => {
  const ctx = useContext(APIContext);

  const { dataState, apiHitsIn } = ctx;

  return (
    <div className="apiautoverifier card">
      <h4>API Auto verifier</h4>
      <div className="apiautoverifier__details">
        <p>Status: {dataState.status}</p>
        <p>Objects: {dataState.data.length}</p>
      </div>
      <p>API to hit: {apiHitsIn} secs</p>
    </div>
  );
};
