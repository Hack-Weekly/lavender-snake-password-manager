import { AddButton } from "./AddButton";
import { PasswordCard } from "./PasswordCard";

export const PasswordCardList = ({ handlePageChange }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <PasswordCard
        website="Github"
        email="name@name.com"
        iconUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        onClick={() => handlePageChange("passworddisplay/github")}
      />
      <PasswordCard
        website="Google"
        email="name2@name.com"
        iconUrl="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
        onClick={() => handlePageChange("passworddisplay/google")}
      />
      <PasswordCard
        website="Github"
        email="name@name.com"
        iconUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      />
      <AddButton
        value={"Add"}
        onClick={() => {
          handlePageChange("AddPasswordPage");
        }}
      />
    </div>
  );
};
