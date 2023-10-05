import Button from "./Button.jsx";

const SignIn = (props) => {
  return (
    <form className="mt-6" onSubmit={props.onSubmit}>
      <input
        onChange={props.onEmailChange}
        value={props.email}
        className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color"
        placeholder="Email"
        type="email"
      />
      <input
        onChange={props.onPasswordChange}
        value={props.password}
        className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color"
        placeholder="Master Password"
        type="password"
      />
      <div className='block'>
        <Button onClick={props.onSubmit}>Sign In</Button>
      </div>
    </form>
  );
};

export default SignIn;