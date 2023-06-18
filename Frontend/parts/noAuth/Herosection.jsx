import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import CustomModal from "@/components/CustomModal";
import SignupLoginModal from "@/components/SignupLogin";
import SelectInputForm from "@/components/SelectInputForm";
import CustomDropdown from "@/components/CustomDropdown";

import AccountDropdown from "@/components/AccountDropdown";
import BalanceDropDown from "@/components/BalanceDropDown";
import PurchaseTime from "@/components/PurchaseTime";
import SideBarCustomModal from "@/components/SideBarCustomModal";
import BurgerModal from "@/components/BurgerModal";
import SettingsModal from "@/components/SettingsModal";
import SignLogModal from "@/components/SignLogModal";
import SupportModal from "@/components/SupportModal";
import PersonModal from "@/components/PersonModal";
import ClockModal from "@/components/ClockModal";

export default function Herosection() {
  const [openSetting, setOpenSetting] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [openChatting, setOpenChatting] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const handleOpenSettings = () => {
    setOpenSetting(true);
  };

  const handleCloseSettings = () => {
    setOpenSetting(false);
  };
  const [openSupportSetting, setOpenSupportSetting] = useState(false);

  const handleOpenSupportSettings = () => {
    setOpenSupportSetting(true);
  };

  const handleCloseSupportSettings = () => {
    setOpenSupportSetting(false);
  };
  const [openChatSetting, setOpenChatSetting] = useState(false);

  const handleOpenChatSettings = () => {
    setOpenChatSetting(true);
    setOpenChatting(true);
  };
  // handleOpenChatSettings

  const handleCloseChatSettings = () => {
    setOpenChatSetting(false);
  };
  const [openSideSetting, setOpenSideSetting] = useState(false);
  const handleOpenSideSettings = () => {
    setOpenSideSetting(true);
  };

  const handleCloseSideSettings = () => {
    setOpenSideSetting(false);
  };
  const [openSignSetting, setOpenSignSetting] = useState(false);
  const handleOpenSignSettings = () => {
    setOpenSignSetting(true);
    setOpenChatting(false);

    setLogin(true);
    setSignup(false);
  };
  const handleOpenLogSettings = () => {
    setOpenSignSetting(true);
    setLogin(false);
    setSignup(true);
  };

  const handleCloseSignSettings = () => {
    setOpenSignSetting(false);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setDropdownOpen(false);
  };
  const [valueFromChild, setValueFromChild] = useState("");

  const handleChildValue = (value) => {
    setValueFromChild(value);
    setAuthenticated(false);
    // Do something with the value received from the child
    console.log("Value received from Child:", value);
  };
  // const handleBalanceSettings = (value) => {
  //   setAuthenticated(true);
  // };
  return (
    <section
      className="view-page md:mb-10 text-center md:pb-36 md:pt-24"
      id="element1"
    >
      <h4 className=" text-2xl text-black mb-10 hidden md:block">
        Uk<span className="font-bold">Crush</span>
      </h4>
      <div className="">
        <nav className="md:hidden upper">
          <ul className="flex justify-between">
            {/* <button onClick={handleOpenSideSettings} className="mr-auto">
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
            </button> */}
            <BurgerModal />

            <button className="hidden">
              <svg
                fill="#f9096c"
                width="40px"
                height="40px"
                viewBox="0 0 200 200"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
            </button>
            {/* <button onClick={handleOpenLogSettings}>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="pink"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9ZM15.8243 13.6235C17.1533 12.523 18 10.8604 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.8604 6.84668 12.523 8.17572 13.6235C4.98421 14.7459 3 17.2474 3 20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20C5 17.7306 7.3553 15 12 15C16.6447 15 19 17.7306 19 20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20C21 17.2474 19.0158 14.7459 15.8243 13.6235Z"
                  fill="#f9096c"
                />
              </svg>
            </button> */}
            <PersonModal />
            {/* <button>
              <Image src="/favicon_io/time-3487.svg" height={30} width={30} />
            </button> */}
            <ClockModal />
          </ul>
        </nav>
        <div className="">
          <SideBarCustomModal
            open={openSideSetting}
            onClose={setOpenSideSetting}
          >
            <div onClick={(e) => e.stopPropagation()}>
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
                onClick={handleCloseSideSettings}
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
            </div>
          </SideBarCustomModal>
        </div>
      </div>
      <div className="card-view rounded-lg shadow-xl md:pb-36 overflow-hidden w-100 md:w-75">
        <nav className="hidden md:block bg-white text-black py-5 px-10 mb-20">
          <div className="flex">
            <div className="flex gap-3 mr-auto">
              <button onClick={handleOpenSupportSettings}>Support</button>
              <div>
                <CustomModal
                  open={openSupportSetting}
                  onClose={setOpenSupportSetting}
                >
                  <div
                    className="bg-white p-4 rounded-lg text-center"
                    onClick={(e) => e.stopPropagation()} // Prevent closing on click inside the modal content
                  >
                    <h1 className="modal-header">Visitor settings</h1>
                    <p className="text-gray-700 mb-16">
                      You have questions or need help? Contact us at any time at
                      <Link href="/" className=" underline pl-1">
                        hello@ukcrush.live
                      </Link>
                    </p>

                    <button
                      onClick={handleCloseSupportSettings}
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
                  </div>
                </CustomModal>
              </div>

              {/* <button onClick={handleDropdownOpen}>Open Dropdown</Button> */}

              <CustomDropdown
                anchorEl={anchorEl}
                onClose={handleDropdownClose}
              />
            </div>
            <div className="flex gap-3">
              {/* <div> */}
              <button onClick={handleOpenSettings} className="self-center">
                Settings
              </button>
              <div className="rounded-lg">
                <CustomModal open={openSetting} onClose={setOpenSetting}>
                  <div
                    className="bg-white p-4 rounded-lg text-center"
                    onClick={(e) => e.stopPropagation()} // Prevent closing on click inside the modal content
                  >
                    <h1 className="modal-header">Visitor settings</h1>
                    <p className="text-gray-700 mb-16">
                      On LuckyCrush, men are connected with random women, and
                      women with random men. This visitor account is a{" "}
                      <span className="font-bold">male</span>
                      visitor account. Was it a mistake?{" "}
                      <Link href="/" className="text-pink underline">
                        Click here{" "}
                      </Link>
                      to log out and reset your gender settings.
                    </p>
                    <button
                      className="rounded-md bg-pink text-white font-extrabold py-4 px-10 m-auto"
                      onClick={handleCloseSettings}
                    >
                      Close
                    </button>
                    <button
                      onClick={handleCloseSettings}
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
                  </div>
                </CustomModal>
              </div>
              {/* </div> */}
              <button onClick={handleOpenSignSettings}>Login</button>
              <button className="text-pink" onClick={handleOpenLogSettings}>
                Sign up
              </button>
              <AccountDropdown
                anchorEl={anchorEl}
                onClose={handleDropdownClose}
              />
              <BalanceDropDown />
              {authenticated && (
                <PurchaseTime onChildValue={handleChildValue} />
              )}
            </div>
          </div>
        </nav>
        <CustomModal open={openSignSetting} onClose={setOpenSignSetting}>
          <button
            onClick={handleCloseSignSettings}
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

          <SignupLoginModal log={login} sign={signup} />
        </CustomModal>
        <h3 className="text-black hidden md:block text-4xl font-semibold mb-10">
          Welcome to the UkCrush video chat
        </h3>
        <h3 className="text-black block md:hidden text-4xl font-semibold mb-10 mt-12">
          Welcome to the
          <br></br>UkCrush video chat
        </h3>
        <h6 className="mt-3">
          <span className="font-bold text-blue">Men</span> are randomly paired
          with <span className="text-pink font-bold">women.</span>
        </h6>
        <h6 className="mb-3">
          <span className="text-pink font-bold">Women</span> are randomly paired
          with <span className="men font-bold text-blue">men.</span>
        </h6>
        <h3 className="text-black text-2xl font-semibold my-10">
          Click to start a chat
        </h3>
        <h6 className="text-semibold text-xl mb-4">
          1 million members from 100+ countries!
        </h6>
        <button
          className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
          onClick={handleOpenChatSettings}
        >
          Start chatting
        </button>

        {openChatting && (
          // authenticated ? (
          //   <AuthenticatedButton onChildValue={handleChildValue} />
          // ) :
          <CustomModal open={openChatSetting} onClose={setOpenChatSetting}>
            <button
              onClick={handleCloseChatSettings}
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
            <div className="pb-10 px-10 bg-white rounded-lg ">
              <h4 className="modal-header">Signup to continue chatting</h4>
              <form className="register">
                <div className="mb-4">
                  <label for="email" className="mb-3">
                    Email
                  </label>
                  <input type="text" placeholder="Email" className="w-full" />
                </div>
                <div className="mb-4">
                  <label for="username" className="mb-3">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full"
                  />
                </div>
                <div className="mb-4">
                  <label for="password" className="mb-3">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="w-full"
                  />
                </div>
                <div className="mb-5 flex align-center">
                  <input type="checkbox" className="accept mr-4 w-full" />
                  <p>
                    I am over 18 years old and I accept the{" "}
                    <button className="text-pink ml-auto">
                      Terms & Conditions.
                    </button>
                  </p>
                </div>
                <button
                  className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                  type="submit"
                >
                  Continue chatting
                </button>
              </form>
              <button
                className="text-pink underline"
                onClick={handleOpenSignSettings}
              >
                I already have an account
              </button>
            </div>
          </CustomModal>
        )}
        <p>You will be asked to activate your camera</p>
      </div>
    </section>
  );
}
