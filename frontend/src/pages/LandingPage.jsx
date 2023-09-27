import { useState } from "react";
import Button from "../components/Button";

export const LandingPage = () => {
  const [signinState, setSigninState] = useState(false);
  const [signupState, setSignupState] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signInHandler = () => {
    setSigninState(true);
    // console.log("signing in...");
  };

  const signUnHandler = () => {
    setSignupState(true);
    // console.log("signing up...");
  };

  const usernameChangeHandler = event => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = event => {
    setPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = event => {
    setPassword(event.target.value);
  };

  const doSignIn = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(confirmPassword);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4 text-white">
          LavenderSnake Password Manager
        </h1>
        {(signinState || signupState) || <div className="space-x-4 my-20">
          <Button onClick={signInHandler}>Sign In</Button>
          <Button onClick={signUnHandler}>Sign Up</Button>
        </div>}
        {(signinState) && <form className="m-12" onSubmit={doSignIn}>
          <input onChange={usernameChangeHandler} value={username} className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color" placeholder="Username" type="text"/>
          <input onChange={passwordChangeHandler} value={password} className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color" placeholder="Master Password" type="password"/>
          <Button onClick={doSignIn}>Sign In</Button>
        </form>}
        {(signupState) && <form className="m-12" onSubmit={doSignIn}>
          <input onChange={usernameChangeHandler} value={username} className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color" placeholder="Username" type="text"/>
          <input onChange={passwordChangeHandler} value={password} className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color" placeholder="Master password" type="password"/>
          <input onChange={confirmPasswordChangeHandler} value={confirmPassword} className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color" placeholder="Re-enter master password" type="password"/>
          <Button onClick={doSignIn}>Sign In</Button>
        </form>}
      </div>
    </div>
  );
};
