import { useState } from "react";
import "./styles/reset.css";
import "./styles/globalstyles.css";
import "./styles/app.css";
import "./pages/LandingPage";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/Dashboard";

function App() {
  const [isDash, setIsDash] = useState(true);
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return <div className="App">{!isDash ? <LandingPage /> : <DashBoard />}</div>;
}

export default App;
