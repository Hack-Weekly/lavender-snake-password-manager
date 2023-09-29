export const AddButton = ({value, onClick}) => {
    return (
        <button onClick={onClick} className={"bg-purple-500  h-10 rounded-md text-lg font-bold transition duration-300 ease-in-out hover:bg-purple-600 hover:shadow-md hover:text-white " + (value === "Add" ? "w-11/12" : "w-full") }>
            {value}
        </button>
    );
};
