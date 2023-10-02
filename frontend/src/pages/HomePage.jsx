import { NavBar } from "../components/NavBar"
import { PasswordCardList } from "../components/PasswordCardList"

export const HomePage = ({handlePageChange}) => {
    return(
        <div className="flex flex-col gap-2 h-full">
            <NavBar handlePageChange={handlePageChange} />
            <PasswordCardList handlePageChange={handlePageChange} />
        </div>
    )
}