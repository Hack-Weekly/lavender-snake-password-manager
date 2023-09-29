import { UserCircleIcon } from '@heroicons/react/24/solid';

export const NavBar = ({handlePageChange}) => {
    return (
        <div className="flex items-center justify-between w-80 h-16 bg-gray-800 px-2 gap-4">
            <input
                className="flex-grow h-8 bg-gray-700 border border-gray-600 rounded-md pl-2 text-white text-sm focus:outline-none"
                type="text"
                placeholder="Search"
            />
            <UserCircleIcon color="white"  className="h-9 w-9" onClick={()=>handlePageChange("ProfilePage")}/>
        </div>
    );
};
