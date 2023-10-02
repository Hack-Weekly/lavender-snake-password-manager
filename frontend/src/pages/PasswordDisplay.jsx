import {EditPassword} from "../components/EditPassword";
import {AddButton} from "../components/AddButton";

export const PasswordDisplay = () => {
    return (
        <div>
            <div>
                <EditPassword iconUrl={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}/>
            </div>
            <div>
                <AddButton />
            </div>
        </div>
    )
}