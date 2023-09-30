export const PasswordInput = ({ onChangeHandler, value, placeholder }) => {
  return (
    <input
      onChange={onChangeHandler}
      value={value}
      className="text-white bg-input-bg text-lg p-2 rounded-md focus:border-btn-color w-full"
      placeholder={placeholder}
      type={placeholder}
    />
  );
};
