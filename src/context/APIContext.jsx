import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";

const apiUrl = "http://97.74.94.225:8282/besstMainApi/df/videoSection";

const config = {
  headers: {
    Client_ID: "some_value",
  },
};

export const APIContext = createContext();

const duration = 3; // seconds

export const APIContextProvider = ({ children }) => {
  const [dataState, setDataState] = useState({
    data: [],
    status: "",
  });
  const [apiHitsIn, setApiHitsIn] = useState(0);
  const [showVideoModal, setShowModal] = useState(false);

  const clearAPIData = () => {
    setDataState({
      data: [],
      status: "",
    });
  };

  const callAPI = useCallback(async () => {
    try {
      const res = await axios.post(apiUrl, {}, config);
      console.log(res)
      if (res.status === 200) {
        setDataState({
          data: res.data?.Data || [],
          status: "Active",
        });
      }
    } catch (error) {
      setDataState({
        data: [],
        status: "Down",
      });
    }
  }, []);

  const handleShowVideoModalOpen = () => {
    setShowModal(true);
  };
  const handleShowVideoModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setApiHitsIn((prev) => (prev < 1 ? duration : --prev));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (apiHitsIn < 1) {
      callAPI();
    }
  }, [apiHitsIn, callAPI]);

  const values = {
    apiHitsIn,
    clearAPIData,
    callAPI,
    dataState,
    showVideoModal,
    handleShowVideoModalOpen,
    handleShowVideoModalClose,
  };

  return <APIContext.Provider value={values}>{children}</APIContext.Provider>;
};
