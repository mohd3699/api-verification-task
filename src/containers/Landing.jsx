import React from "react";
import { APIAutoVerifier, APIManualVerifier, Videos } from "../components";

import "../styles/landing.styles.css";

export const Landing = () => {
  return (
    <div className="main__container">
      <APIAutoVerifier />
      <APIManualVerifier />
      <Videos />
    </div>
  );
};
