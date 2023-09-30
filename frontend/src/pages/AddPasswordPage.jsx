import { AddPassword } from "../components/AddPassword";

export const AddPasswordPage = ({handlePageChange}) => {
    return (
        <div className="  flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-semibold text-white mb-6">Add New Password</h1>
            <div className="p-8 rounded-lg shadow-lg w-full">
                <AddPassword />
            </div>
            <button className="text-blue-500 hover:underline text-lg" onClick={()=>{handlePageChange("homePage")}}>Return</button>
        </div>
    );
};
