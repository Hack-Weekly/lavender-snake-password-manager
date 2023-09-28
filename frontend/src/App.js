import { useState } from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {
  const [userTouchedButton, setUserTouchedButton] = useState(false);

  const touchHandler = () => {
    (userTouchedButton === true) ? setUserTouchedButton(false) : setUserTouchedButton(true);
  };

  return (
    <div className="App">
      <div className='h-96 w-80 mx-auto bg-backdrop'>
        {!userTouchedButton && <LandingPage onClick={touchHandler} />}
        {userTouchedButton && <HomePage onClick={touchHandler} />}
      </div>
    </div>
  );
}

export default App;
