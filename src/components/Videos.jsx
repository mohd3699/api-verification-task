import React, { useContext } from "react";
import { CreateModalPortal } from "./CreateModalPortal";
import { APIContext } from "../context/APIContext";

import "../styles/videos.styles.css";

export const Videos = () => {
  const ctx = useContext(APIContext);

  const { showVideoModal, handleShowVideoModalOpen } = ctx;

  return (
    <>
      {showVideoModal && <CreateModalPortal />}
      <div className="videos card" onClick={handleShowVideoModalOpen}>
        Videos
      </div>
    </>
  );
};
