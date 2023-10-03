import { useState } from "react";
import Button from "../components/Button";
import SignIn from "../components/SignIn.jsx";
import SignUp from "../components/SignUp.jsx";

export const RegisterPage = (props) => {
  const [signinState, setSigninState] = useState(false);
  const [signupState, setSignupState] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signInHandler = () => {
    setSigninState(true);
    // console.log("signing in...");
  };

  const signUpHandler = () => {
    setSignupState(true);
    // console.log("signing up...");
  };

  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setUserPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const doSignIn = (event) => {
    event.preventDefault();
    console.log(userEmail);
    console.log(userPassword);
    setUserEmail("");
    setUserPassword("");
  };

  const doSignUp = async (event) => {
    event.preventDefault();
    const userDetails = {
      email: [userEmail],
      password: [userPassword],
      password2: [confirmPassword]
    }

    console.log(userDetails);

    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        body: JSON.stringify(userDetails)
      });
      console.log(response);
    } catch(error) {
      console.log('ERROR: ',error);
    };

    setUserEmail("");
    setUserPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <p className="m-4 text-2xl text-white">
          <em>LavenderPass</em>
        </p>
        <Button onClick={()=>{props.handlePageChange("landingpage")}}>
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
            <Button onClick={signUpHandler}>Sign Up</Button>
          </div>
        )}
        {signinState && (
          <SignIn
            onSubmit={doSignIn}
            onEmailChange={emailChangeHandler}
            onPasswordChange={passwordChangeHandler}
            email={userEmail}
            password={userPassword}
          />
        )}
        {signupState && (
          <SignUp
            onSubmit={doSignUp}
            onEmailChange={emailChangeHandler}
            onPasswordChange={passwordChangeHandler}
            onConfirmPasswordChange={confirmPasswordChangeHandler}
            email={userEmail}
            password={userPassword}
            confirmPassword={confirmPassword}
          />
        )}
      </div>
    </div>
  );
};
