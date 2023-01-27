import { useState } from "react";
import "./styles/reset.css";
import "./styles/globalstyles.css";
import "./pages/LandingPage";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/DashBoard";

function App() {
  const [isDash, setIsDash] = useState(true);

  return (
    <>
      {!isDash ? (
        <LandingPage setIsDash={setIsDash} />
      ) : (
        <DashBoard setIsDash={setIsDash} />
      )}
    </>
  );
}

export default App;
