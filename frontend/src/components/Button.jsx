const Button = (props) => {
  return <button onClick={props.onClick} className="bg-backdrop border-2 border-btn-color hover:bg-btn-color text-white px-4 py-2 rounded-md mt-2">{props.children}</button>
};

export default Button;