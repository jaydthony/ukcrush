import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CustomModal from "./CustomModal";

export default function SignupLogin({ log, sign }) {
  const [login, setLogin] = useState(log);
  const [signup, setSignup] = useState(sign);
  const [signUpSetting, setSignUpSetting] = useState(false);
  const showLogin = () => {
    setSignup(false);
    setLogin(true);
  };

  const showSignup = () => {
    setSignup(true);
    setLogin(false);
  };
  const [forgotSetting, setForgotSetting] = useState(false);

  const handleForgotSettings = (e) => {
    setSignUpSetting(false);
    setForgotSetting(true);

    e.preventDefault();
  };

  const handleCloseForgotSettings = () => {
    setForgotSetting(false);
  };

  const handleSignUpSettings = (e) => {
    setSignUpSetting(true);
    e.preventDefault();
  };

  const handleCloseSignUpSettings = () => {
    setSignUpSetting(false);
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden"
      style={{ maxWidth: "400px" }}
    >
      <div className="flex text-center mb-10" style={{ background: "#EAEAEA" }}>
        <button
          className={`w-full p-3 ${signup ? "class1" : "class2"}`}
          onClick={showSignup}
        >
          Signup
        </button>
        <button
          className={`w-full p-3 ${login ? "class1" : "class2"}`}
          onClick={showLogin}
        >
          Login
        </button>
      </div>
      {signup && (
        <div
          className="px-10 pb-10 m-auto"
          // style={{ width: "296px", maxHeight: "calc(100% - 4rem)" }}
        >
          <form className="register text-start">
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
              <input type="text" placeholder="Username" className="w-full" />
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
              <div style={{ width: "16px" }} className="mr-4">
                <input type="checkbox" className="accept " />
              </div>
              <p>
                I am over 18 years old and I accept the{" "}
                <Link className="text-pink ml-auto" target="_blank" href="/">
                  Terms & Conditions.
                </Link>
              </p>
            </div>
            <button
              className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
              type="submit"
              onClick={handleSignUpSettings}
            >
              Sign Up
            </button>
          </form>

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
            <div className="pb-10 px-10 bg-white rounded-lg m-auto text-center">
              <h4 className="text-2xl text-semibold mb-2">Link sent to</h4>
              <p className="text-pink mb-2">hhabbey05@gmail.com</p>
              <p>Why confirm?</p>
              <div className="flex justify-center align-center">
                <Image
                  src="/asset/green-mark.png"
                  title="approved icons"
                  height={24}
                  width={24}
                  className="mr-3"
                />
                <p>Faster Matchmaking</p>
              </div>
              <p className="mb-2">Can't find our email?</p>

              <button
                className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                type="submit"
              >
                Resend activation link!
              </button>
              <button
                className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                type="submit"
              >
                I will do this later
              </button>
              <p className="mb-2">OR</p>
              <h4 className="text-xl font-bold text-pink mb-2">
                Update your email address
              </h4>
              <p className="mb-2">Your current email address:</p>
              <p className="text-xl text-pink mb-2">hhabbey05@gmail.com</p>
              <form className="register">
                <div className="mb-4">
                  <label for="email" className="mb-3">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Your new email address"
                    className="w-full"
                  />
                </div>
                <button
                  className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                  type="submit"
                >
                  Save
                </button>
              </form>
            </div>
          </CustomModal>
          <button className="text-pink underline" onClick={showLogin}>
            I already have an account
          </button>
        </div>
      )}
      {login && (
        <div
          className=" pb-10 px-10 m-auto text-start"
          style={{ width: "400px" }}
        >
          <form className="register">
            <div className="mb-4">
              <label for="email">Email</label>
              <input type="text" placeholder="Email" className="w-full" />
            </div>
            <div className="mb-4">
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full"
              />
            </div>
            <button
              className="text-pink underline block mb-4"
              onClick={handleForgotSettings}
            >
              Forgot Password
            </button>
          </form>
          <div className="">
            <CustomModal open={forgotSetting} onClose={setForgotSetting}>
              <button
                onClick={handleCloseForgotSettings}
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
              <div className="pb-10 px-10 bg-white rounded-lg pt-10">
                <h4 className="text-2xl text-black text-center mb-10">
                  Forgot password
                </h4>
                <p>What is the email address associated with your account</p>
                <form className="register">
                  <div className="mb-4">
                    <label for="email" className="mb-3">
                      Email
                    </label>
                    <input type="text" placeholder="Email" className="w-full" />
                  </div>

                  <button
                    className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </CustomModal>
          </div>
          <button
            className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4 block"
            type="submit"
          >
            Login
          </button>
          {/* </form> */}
          <button className="text-pink underline" onClick={showSignup}>
            Create an account
          </button>
        </div>
      )}
    </div>
  );
}
