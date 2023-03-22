import React, { useContext } from "react";
import { APIContext } from "../context/APIContext";
import { RenderVideo } from "./RenderVideo";

import "../styles/modal.styles.css";

export const VideoModal = () => {
  const ctx = useContext(APIContext);

  const { dataState, handleShowVideoModalClose } = ctx;

  return (
    <div className="modal">
      <div className="modal-backdrop">
        <div className="modal-content">
          <button className="close-icon" onClick={handleShowVideoModalClose}>
            X
          </button>
          <div className="video-list">
            {dataState.data.length ? (
              dataState.data.map((data) => (
                <React.Fragment key={data.id}>
                  <RenderVideo data={data} />
                </React.Fragment>
              ))
            ) : (
              <h4>No data found!</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
