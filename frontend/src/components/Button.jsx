const Button = (props) => {
  return <button className="bg-btn-color hover:bg-btn-hover text-white px-4 py-2 rounded-md">{props.children}</button>
};

export default Button;