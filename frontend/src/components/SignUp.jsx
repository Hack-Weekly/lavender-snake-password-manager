import Button from "./Button.jsx";

const SignUp = (props) => {
  const { error } = props;
  return (
    <form className="m-6" onSubmit={props.onSubmit}>
      {error.email.length > 0 ? (
        <p className="text-red-500 text-xs">{error.email}</p>
      ) : (
        ""
      )}
      <input
        onChange={props.onEmailChange}
        value={props.email}
        className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color"
        placeholder="Email"
        type="email"
      />
      {error.password.length > 0 ? (
        <p className="text-red-500 text-xs">{error.password}</p>
      ) : (
        ""
      )}
      <input
        onChange={props.onPasswordChange}
        value={props.password}
        className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color"
        placeholder="Master password"
        type="password"
      />
      {error.password2.length > 0 ? (
        <p className="text-red-500 text-xs">{error.password2}</p>
      ) : (
        ""
      )}
      <input
        onChange={props.onConfirmPasswordChange}
        value={props.confirmPassword}
        className="text-white bg-input-bg m-2 p-2 rounded-md focus:border-btn-color"
        placeholder="Re-enter master password"
        type="password"
      />
      <Button onClick={props.onSubmit}>Sign Up</Button>
    </form>
  );
};

export default SignUp;
