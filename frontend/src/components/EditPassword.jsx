import { AddButton } from "./AddButton"
import { PasswordInput } from "./AddPasswordInput"

export const EditPassword = ({ email, password, website, iconUrl, handlePageChange }) => {
    return(
        <div className="flex flex-col gap-4 items-center justify-center p-4">
            <div>
                <img src={iconUrl} />
            </div>
            <PasswordInput value={email} />
            <PasswordInput value={password} />
            <AddButton value={"Edit"} onClick={() => {handlePageChange("PasswordCardList")}} />
        </div>
    )
}