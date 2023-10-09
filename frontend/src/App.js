import { useEffect, useState } from "react";
import "./App.css";
import { AddPasswordPage } from "./pages/AddPasswordPage";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { RegisterPage } from "./pages/RegisterPage";
import { isAuth } from "./services/utils/isAuth";
import { PasswordDisplay } from "./pages/PasswordDisplay";

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePageChange = async newPage => {
    await handleIsAuth();
    const route = newPage.split("/")[0].toLowerCase();
    if (isAuthenticated) {
      setCurrentPage(newPage);
    } else {
      if (route === "landingpage" || route === "signin") {
        setCurrentPage(newPage);
      } else {
        setCurrentPage("landingpage");
      }
    }
  };

  const handleIsAuth = async () => {
    setIsAuthenticated(await isAuth());
  };
  useEffect(() => {
    handlePageChange(currentPage);
  });
  return (
    <div className="App">
      <div className="h-auto w-80 mx-auto bg-backdrop">
        {(() => {
          switch (currentPage.split("/")[0].toLowerCase()) {
            case "landingpage":
              return <LandingPage handlePageChange={handlePageChange} />;

            case "signin":
              return (
                <RegisterPage handlePageChange={handlePageChange} setIsAuthenticated={setIsAuthenticated} />
              );
            case "homepage":
              return <HomePage handlePageChange={handlePageChange} />;
            case "passworddisplay":
              return (
                <PasswordDisplay website={currentPage.split("/")[1]} handlePageChange={handlePageChange} />
              );
            case "addpasswordpage":
              return <AddPasswordPage handlePageChange={handlePageChange} />;
            case "profilepage":
              return (
                <ProfilePage
                  userEmail={"name@gmail.com"}
                  setIsAuthenticated={setIsAuthenticated}
                  handlePageChange={handlePageChange}
                />
              );
            default:
              return (
                <div className="text-white text-3xl text-center">
                  Page not found !
                  <button
                    className="text-blue-500 hover:underline text-lg"
                    onClick={() => {
                      handlePageChange("landingpage");
                    }}>
                    Return
                  </button>
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
}

export default App;
