import { AddButton } from "./AddButton"
import { PasswordInput } from "./AddPasswordInput"

export const AddPassword = () => {
    return(
        <div className="flex flex-col gap-4 items-center justify-center p-4">
            <PasswordInput placeholder="email" />
            <PasswordInput placeholder="password" />
            <AddButton value={"Add password"}/>
        </div>
    )
}