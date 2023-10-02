import { useState } from "react";
import { AddButton } from "./AddButton";
import { PasswordInput } from "./AddPasswordInput";
import { addLockBox } from "../services/endpoints/lockbox";
import { login } from "../services/endpoints/user";

export const AddPassword = ({ handlePageChange }) => {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async () => {
    const data = {
      login_website: website,
      login_id: email,
      login_password: password,
    };
    try {
      const res = await addLockBox(data);
      if (res.status === 201) {
        handlePageChange("homePage");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-center ">
      <PasswordInput placeholder="website" onChangeHandler={setWebsite} />
      <PasswordInput placeholder="email" onChangeHandler={setEmail} />
      <PasswordInput placeholder="password" onChangeHandler={setPassword} />
      <AddButton value={"Add password"} onClick={onSubmitHandler} />
    </div>
  );
};
