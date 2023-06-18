import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

const ClockModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openModal = () => {
    setIsOpen(true);
    setAnchorEl(null);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
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

  return (
    <>
      <button onClick={handleOpen} className="text-center">
        <Image src="/favicon_io/time-3487.svg" height={30} width={30} />
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <div>
          <MenuItem onClick={handleClose}>0 minutes</MenuItem>
          <MenuItem className="text-pink" onClick={openModal}>
            Buy Minutes
          </MenuItem>
        </div>
      </Menu>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content relative bg-white p-4 rounded-lg text-center">
            <button
              onClick={closeModal}
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
            <div className="pb-10 px-10 bg-white rounded-lg text-center">
              <h4 className="modal-header">
                Top up minutes to continue chatting
              </h4>
              <p>
                There is no subscription. No recurring payments. Just buy what
                you need.
              </p>
              <button className="sub-class mb-3">
                <Image
                  src="/asset/green-mark.png"
                  title="approved icons"
                  height={24}
                  width={24}
                  className="mr-3  sub-icon"
                />
                <p className="mr-auto">15 minutes</p>
                <p>16.99 USD</p>
              </button>
              <button className="sub-class mb-3 sub-class-special">
                <Image
                  src="/asset/green-mark.png"
                  title="approved icons"
                  height={24}
                  width={24}
                  className="mr-3  sub-icon"
                />
                <p className="mr-auto border-pink">45 minutes</p>
                <p>49.99 USD</p>
              </button>
              <button className="sub-class mb-3">
                <Image
                  src="/asset/green-mark.png"
                  title="approved icons"
                  height={24}
                  width={24}
                  className="mr-3  sub-icon"
                />
                <p className="mr-auto">90 minutes</p>
                <p>99.99 USD</p>
              </button>
              <p className="text-xl text-black">Let's Encrypt</p>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
          background-color: #fefefe;

          border: 1px solid #888;
          max-width: 500px;
        }

        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ClockModal;
