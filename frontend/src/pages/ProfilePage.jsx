import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export const ProfilePage = ({ userEmail, handlePageChange }) => {
    const onLogout = () => {
        handlePageChange("LandingPage");    
    };

    return (
        <div className="flex flex-col items-center justify-center   text-white">
            <UserCircleIcon className="h-16 w-16 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Email: {userEmail}</h2>
            <div className="flex mb-8">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer mr-4" onClick={onLogout}>
                    Logout
                </button>
                <button className="text-blue-500 hover:underline text-lg" onClick={() => handlePageChange("homePage")}>
                    Return
                </button>
            </div>
        </div>
    );
};
