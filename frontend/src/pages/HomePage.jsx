import { NavBar } from "../components/NavBar"
import { PasswordCardList } from "../components/PasswordCardList"

export const Home = () => {
    return(
        <div className="flex flex-col gap-2 h-full">
            <NavBar />
            <PasswordCardList />
        </div>
    )
}