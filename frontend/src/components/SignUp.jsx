import Button from "./Button";

const SignUp = (props) => {
  return (
    <form className="m-6" onSubmit={props.onSubmit}>
       <input onChange={props.onUsernameChange} value={props.username} className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color" placeholder="Username" type="text"/>
       <input onChange={props.onPasswordChange} value={props.password} className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color" placeholder="Master password" type="password"/>
       <input onChange={props.onConfirmPasswordChange} value={props.confirmPassword} className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color" placeholder="Re-enter master password" type="password"/>
       <Button onClick={props.onSubmit}>Sign Up</Button>
    </form>);
  };

  export default SignUp;
