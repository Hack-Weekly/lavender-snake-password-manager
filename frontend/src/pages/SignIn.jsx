import Button from '../components/Button.jsx';

const SignIn = (props) => {
  return (
    <form className="mt-6" onSubmit={props.onSubmit}>
      <input onChange={props.onUsernameChange} value={props.username} className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color" placeholder="Username" type="text"/>
      <input onChange={props.onPasswordChange} value={props.password} className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color" placeholder="Master Password" type="password"/>
      <Button onClick={props.onSubmit}>Sign In</Button>
    </form>
  );
};

export default SignIn;
