import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RenderVideo } from "../components/RenderVideo";
import { APIContext } from "../context/APIContext";

import "../styles/view-data.styles.css";

export const ViewAPIData = () => {
  const ctx = useContext(APIContext);
  const navigate = useNavigate();

  const { dataState } = ctx;

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="view-data">
      <div className="toolbar">
        <h4 className="title">List of Vidoes:</h4>
        <button onClick={navigateBack}>Back</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Content</th>
            <th>Video Url</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {dataState.data?.length > 0 ? (
            dataState.data?.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.textContent}</td>
                  <td>{data.videoUrl}</td>
                  <td>
                    <RenderVideo data={data} />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4} align="center">
                No row found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
