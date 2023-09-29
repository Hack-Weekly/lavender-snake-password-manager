import { useState } from "react";
import "./App.css";
import { AddPasswordPage } from "./pages/AddPasswordPage";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      {/**/}
      <div className='h-96 w-80 mx-auto bg-backdrop'>
          <LandingPage />
      </div>
    </div>
  );
}

export default App;
