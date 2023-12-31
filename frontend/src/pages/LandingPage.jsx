import React from "react";
import Button from "../components/Button";
import lockerImage from "../assets/locker.png";

export const LandingPage = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-white m-4 text-2xl">
        <em>LavenderPass</em>
      </p>
      <img className="h-28 w-28 mt-4" src={lockerImage} alt="locker" />
      <p className="text-white text-center text-xl m-4">
        Manage your passwords <span className="text-btn-color">securely</span>{" "}
      </p>
      <div className="mb-2">
        <Button
          onClick={() => {
            props.handlePageChange("signIn");
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};
