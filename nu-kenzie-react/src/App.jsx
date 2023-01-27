import { useState } from "react";
import "./styles/reset.css";
import "./styles/globalstyles.css";
import "./styles/app.css";
import "./pages/LandingPage";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/Dashboard";

function App() {
  const [isDash, setIsDash] = useState(true);

  return (
    <div className="App">
      {!isDash ? (
        <LandingPage setIsDash={setIsDash} />
      ) : (
        <DashBoard setIsDash={setIsDash} />
      )}
    </div>
  );
}

export default App;
