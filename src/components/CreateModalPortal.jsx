import React from "react";
import { createPortal } from "react-dom";
import { VideoModal } from "./VideoModal";

export const CreateModalPortal = () => {
  const modalContainer = document.getElementById("modal-root");
  return modalContainer ? createPortal(<VideoModal />, modalContainer) : null;
};
