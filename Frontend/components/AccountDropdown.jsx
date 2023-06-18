import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import CustomModal from "./CustomModal";
import { useState } from "react";
import Link from "next/link";

function AccountDropdown({ onClose }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [signUpSetting, setSignUpSetting] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClose();
    // setSignUpSetting(true);
  };
  const handleCloseSignUpSettings = () => {
    setSignUpSetting(false);
    setAnchorEl(null);
  };
  const showSettingsModal = () => {
    setSignUpSetting(true);
  };

  return (
    <div>
      <button onClick={handleOpen} className="px-auto">
        Account
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <div>
          <MenuItem onClick={showSettingsModal}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Log out</MenuItem>
        </div>
      </Menu>
      <CustomModal open={signUpSetting} onClose={setSignUpSetting}>
        <button
          onClick={handleCloseSignUpSettings}
          className="absolute right-[-19px] top-[-19px] bg-white rounded-full p-2"
        >
          <svg
            fill="#f9096c"
            width="20px"
            height="20px"
            viewBox="0 0 200 200"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
        </button>
        <div className="pb-10 px-10 bg-white rounded-lg m-auto py-4">
          <h4 className="text-3xl text-semibold mb-2 text-black text-center">
            Account settings
          </h4>
          <p className="mb-2 text-black">
            On LuckyCrush, men are connected with random women, and women with
            random men. This member account is a male member account. Was it a
            mistake?{" "}
            <Link href="/" className="text-pink underline pr-1">
              Click here
            </Link>
            Click here to log out and reset your gender settings
          </p>
          <p>
            Username: hhabbey05{" "}
            <Link href="/" className="text-pink">
              Edit
            </Link>
          </p>

          <p className="mb-2">
            Email: hhabbey05@gmail.com{" "}
            <Link href="/" className="text-pink">
              Edit
            </Link>
          </p>

          <p className="mb-2">
            Password{" "}
            <Link href="/" className="text-pink">
              Edit
            </Link>
          </p>
          <p className="mb-2">
            Note: Your username is the only information other users can see. All
            other information is strictly confidential.
          </p>
          <Link href="/">Delete my account</Link>
        </div>
      </CustomModal>
    </div>
  );
}
export default AccountDropdown;
