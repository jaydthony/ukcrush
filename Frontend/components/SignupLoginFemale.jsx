import Link from "next/link";
import { useState } from "react";

export default function SignupLogin({ log, sign }) {
  const [login, setLogin] = useState(log);
  const [signup, setSignup] = useState(sign);
  const showLogin = () => {
    setSignup(false);
    setLogin(true);
  };

  const showSignup = () => {
    setSignup(true);
    setLogin(false);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden">
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
        <div className=" pb-10">
          <h3 className="font-semibold text-3xl">My account</h3>
          <p>Welcome! Let's start by creating an account.</p>
          <p>It only takes 3 minutes!</p>
          <form className="register">
            <div className="mb-4">
              <label for="username" className="mb-3">
                Username
              </label>
              <input type="text" placeholder="Username" />
            </div>
            <div className="mb-4">
              <label for="email" className="mb-3">
                Email
              </label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label for="password" className="mb-3">
                Confirm email
              </label>
              <input type="password" placeholder="Confirm Email" />
            </div>
            <div className="mb-4">
              <label for="password" className="mb-3">
                Confirm Password
              </label>
              <input type="password" placeholder="password" />
            </div>
            <div className="mb-5 flex align-center">
              <input type="checkbox" className="accept" />
              <p>
                I am over 18 years old and I accept the{" "}
                <button className="text-pink ml-auto">
                  Terms & Conditions.
                </button>
              </p>
            </div>
            <Link className="text-pink underline" type="submit">
              back
            </Link>
          </form>
          <button className="rounded-md bg-pink text-white font-extrabold py-4 px-10">
            I already have an account
          </button>
        </div>
      )}
      {login && (
        <div className=" pb-10">
          <form className="register">
            <div className="mb-4">
              <label for="email" className="mb-3">
                Email
              </label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label for="password" className="mb-3">
                Password
              </label>
              <input type="password" placeholder="Password" />
            </div>
            <button className="text-pink underline block mb-4">
              Forgot Password
            </button>
            <button
              className="rounded-md bg-pink text-white font-extrabold py-4 px-10 mb-4"
              type="submit"
            >
              Login
            </button>
          </form>
          <button className="text-pink underline">Create an account</button>
        </div>
      )}
    </div>
  );
}
