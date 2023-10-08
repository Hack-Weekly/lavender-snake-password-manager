import { AddButton } from "./AddButton"
import { PasswordInput } from "./AddPasswordInput"

export const EditPassword = ({ email, password, website, handlePageChange }) => {
    return(
        <div className="flex flex-col items-center p-4 border border-white rounded-md bg-[#302e43]">
            <div className="text-white text-3xl">
                {website}
            </div>
            <div className="flex flex-col gap-8 p-4">
                <PasswordInput value={email} placeholder={"Email"} />
                <PasswordInput value={password} placeholder={"Password"} />
            </div>
            <div className= "w-32">
                <AddButton value={"Edit"} onClick={()=>{handlePageChange("homePage")}}/>
            </div>
        </div>
    )
}
//