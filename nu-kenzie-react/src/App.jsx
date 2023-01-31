import { useState } from "react";
import "./styles/reset.css";
import "./styles/globalstyles.css";
import "./pages/LandingPage";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/DashBoard";
import Button from "./components/Button";

function App() {
  const [isDash, setIsDash] = useState(false);

  return (
    <>
      {!isDash ? (
        <LandingPage setIsDash={setIsDash}>
          <Button setIsDash={setIsDash} />
        </LandingPage>
      ) : (
        <DashBoard setIsDash={setIsDash} />
      )}
    </>
  );
}

export default App;
