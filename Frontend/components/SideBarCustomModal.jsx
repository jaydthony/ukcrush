import React from "react";
// import { Modal } from "@material-ui/core";
import Modal from "@mui/material/Modal";

const SideBarCustomModal = ({ open, onClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      // Add Tailwind CSS classes to the container
      className="flex items-start mt-10"
    >
      <div className="w-1/2">
        <div>{children}</div>
      </div>
    </Modal>
  );
};

export default SideBarCustomModal;
