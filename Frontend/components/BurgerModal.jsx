import { useState } from "react";
import Link from "next/link";
import SelectInputForm from "./SelectInputForm";
import SignLogModal from "./SignLogModal";
import SettingsModal from "./SettingsModal";
import SupportModal from "./SupportModal";
import AccountDropdown from "./AccountDropdown";
import BalanceDropDown from "./BalanceDropDown";

const BurgerModal = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    onClose();
  };
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
    // setDropdownOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="mr-auto">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 17H20M4 12H20M4 7H20"
            stroke="#f9096c"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#f9096c"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="modal-overlay relative text-center flex items-start">
          <div
            className="modal-content bg-white p-4 rounded-lg text-center"
            style={{ width: "300px" }}
          >
            <nav className="md:hidden bg-white text-black side-bar">
              <SelectInputForm />

              <SignLogModal />
              <SettingsModal />
              <SupportModal />
              <div className="py-3 border-b-2">
                <AccountDropdown
                  anchorEl={anchorEl}
                  onClose={handleDropdownClose}
                />
              </div>
              <div className="py-3 border-b-2">
                <BalanceDropDown className="py-3 border-b-2" />
              </div>
            </nav>
            <button
              onClick={closeModal}
              className="absolute right-[19px] top-[19px] bg-white rounded-full p-2"
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
          // display: flex;
          // align-items: center;
          // justify-content: center;
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

export default BurgerModal;
