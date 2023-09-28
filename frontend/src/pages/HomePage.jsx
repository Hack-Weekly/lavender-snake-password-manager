import { useState } from "react";
import Button from "../components/Button";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";

export const HomePage = (props) => {
  const [signinState, setSigninState] = useState(false);
  const [signupState, setSignupState] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signInHandler = () => {
    setSigninState(true);
    // console.log("signing in...");
  };

  const signUnHandler = () => {
    setSignupState(true);
    // console.log("signing up...");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const doSignIn = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    setUsername("");
    setPassword("");
  };

  const doSignUp = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(confirmPassword);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <p className="m-4 text-2xl text-white">
          <em>LavenderPass</em>
        </p>
        <Button onClick={props.onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Button>

        {signinState || signupState || (
          <div className="space-x-4 my-20">
            <Button onClick={signInHandler}>Sign In</Button>
            <Button onClick={signUnHandler}>Sign Up</Button>
          </div>
        )}
        {signinState && (
          <SignIn
            onSubmit={doSignIn}
            onUsernameChange={usernameChangeHandler}
            onPasswordChange={passwordChangeHandler}
            username={username}
            password={password}
          />
        )}
        {signupState && (
          <SignUp
            onSubmit={doSignUp}
            onUsernameChange={usernameChangeHandler}
            onPasswordChange={passwordChangeHandler}
            onConfirmPasswordChange={confirmPasswordChangeHandler}
            username={username}
            password={password}
            confirmPassword={confirmPassword}
          />
        )}
      </div>
    </div>
  );
};
