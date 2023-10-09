import Button from "./Button.jsx";

const SignIn = (props) => {
  const { error } = props;
  return (
    <form className="mt-6" onSubmit={props.onSubmit}>
      {error.email.length > 0 ? (
        <p className="text-red-500 text-xs">{error.email}</p>
      ) : (error.detail.length > 0 ? <p className="text-red-500 text-xs">{error.detail}</p> : '')}
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
        placeholder="Master Password"
        type="password"
      />
      <div className="block mb-4">
        <Button onClick={props.onSubmit}>Sign In</Button>
      </div>
    </form>
  );
};

export default SignIn;
