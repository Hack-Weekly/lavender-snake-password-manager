export const PasswordCard = ({ website, email, iconUrl, onClick }) => {
  return (
    <div
      className="flex flex-col w-11/12 h-16 p-2 bg-gray-800 border border-white rounded-md transition duration-300 ease-in-out hover:bg-gray-900"
      onClick={onClick}>
      <div className="flex items-center gap-2">
        <img src={iconUrl} alt={`${website} icon`} className="h-8 w-8" />
        <div className="text-white">
          <h1 className="text-lg font-semibold">{website}</h1>
          <h1 className="text-sm opacity-75 font-light">{email}</h1>
        </div>
      </div>
    </div>
  );
};
