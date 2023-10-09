import {EditPassword} from "../components/EditPassword";
import {AddButton} from "../components/AddButton";

export const PasswordDisplay = ({ website, handlePageChange }) => {
    return (
        <div className="flex flex-col gap-8 items-center justify-center p-4">
            <div>
                <EditPassword website={"Github"} handlePageChange={ handlePageChange }/>
            </div>
            <div className= "items-center justify-center w-48">
                <AddButton value={"Back"} onClick={()=>{handlePageChange("homePage")}}/>
            </div>
        </div>
    )
}