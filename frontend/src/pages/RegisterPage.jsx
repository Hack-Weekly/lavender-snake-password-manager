import { useState } from "react";
import Button from "../components/Button";
import SignIn from "../components/SignIn.jsx";
import SignUp from "../components/SignUp.jsx";
import { register } from "../services/endpoints/user";
import { login } from "../services/endpoints/user";

export const RegisterPage = (props) => {
  const [signinState, setSigninState] = useState(false);
  const [signupState, setSignupState] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState({
    email: "",
    password: "",
    password2: "",
    detail: ""
  });

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

  const doSignIn = async (event) => {
    event.preventDefault();
    const userDetails = {
      email: userEmail,
      password: userPassword,
    };

    try {
      const res = await login(JSON.stringify(userDetails));
      if (res === 200) console.log("Logging you in...");
    } catch (err) {
      const errResponse = err.response.data;
      console.log("ERROR: ", errResponse);
      setError((error) => {
        const newError = {
          ...error,
          email: errResponse.email !== undefined ? errResponse.email[0] : "",
          password:
            errResponse.password !== undefined ? errResponse.password[0] : "",
          detail: errResponse.detail !== '' ? errResponse.detail : ""
        };
        return newError;
      });
      console.log(error);
    }

    setUserEmail("");
    setUserPassword("");
  };

  const doSignUp = async (event) => {
    event.preventDefault();
    const userDetails = {
      email: userEmail,
      password: userPassword,
      password2: confirmPassword,
    };

    try {
      const res = await register(JSON.stringify(userDetails));
      if (res.status === 201 && res.statusText === "Created")
        console.log("Successfully created account!");
    } catch (err) {
      const errResponse = err.response.data;
      console.log("ERROR: ", errResponse);
      setError((error) => {
        const newError = {
          ...error,
          email: errResponse.email !== undefined ? errResponse.email[0] : "",
          password:
            errResponse.password !== undefined ? errResponse.password[0] : "",
          password2:
            errResponse.password2 !== undefined ? errResponse.password2[0] : "",
        };
        return newError;
      });
      console.log(error);
    }

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
        <Button
          onClick={() => {
            props.handlePageChange("landingpage");
          }}
        >
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
            error={error}
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
            error={error}
          />
        )}
      </div>
    </div>
  );
};
