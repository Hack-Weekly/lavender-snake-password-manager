import { AddButton } from "./AddButton"
import { PasswordCard } from "./PasswordCard"

export const PasswordCardList = () => {
    return(
        <div className="flex flex-col gap-2 items-center justify-center">
            <PasswordCard website="Github" email="name@name.com" iconUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
            <PasswordCard website="Github" email="name@name.com" iconUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
            <PasswordCard website="Github" email="name@name.com" iconUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>     
            <AddButton />
        </div>
    )
}