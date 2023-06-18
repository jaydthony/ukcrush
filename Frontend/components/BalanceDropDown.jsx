import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import CustomModal from "./CustomModal";
import { useState } from "react";
import Link from "next/link";

import PurchaseTime from "./PurchaseTime";

function BalanceDropDown({ onClose }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [balanceModal, setBalanceModal] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const showMinuteModal = () => {
    setBalanceModal(true);
    setAnchorEl(null);
  };
  const handleChildValue = (value) => {
    setBalanceModal(value);
    // Do something with the value received from the child
    console.log("Value received from Child:", value);
  };

  return (
    <div>
      <button onClick={handleOpen} className="text-center">
        Balance
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <div>
          <MenuItem onClick={handleClose}>0 minutes</MenuItem>
          <MenuItem className="text-pink" onClick={showMinuteModal}>
            Buy minutes
          </MenuItem>
        </div>
      </Menu>
      {balanceModal && <PurchaseTime onChildValue={handleChildValue} />}
    </div>
  );
}
export default BalanceDropDown;
