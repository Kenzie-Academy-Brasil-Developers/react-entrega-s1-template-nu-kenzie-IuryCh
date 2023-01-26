import "../../styles/globalstyles.css";
import "../../styles/reset.css";
import "./dashboard.css";
import Form from "../../../components/Form";
import TotalMoney from "../../../components/TotalMoney";
import List from "../../../components/List";
import logo from "../../assets/imagens/NuKenzie2.svg";

function DashBoard({}) {
  return (
    <>
      <header className="dash_header">
        <div className="dash_nukenzie">
          <img src={logo} alt="Nu kenzie" />
        </div>
        <button className="btn_logout">Inicio</button>
      </header>
      <main className="dash_main">
        <Form />
        <TotalMoney />
        <aside>
          <h3>Você ainda não possui lançamento</h3>
          <List />
        </aside>
      </main>
    </>
  );
}

export default DashBoard;
