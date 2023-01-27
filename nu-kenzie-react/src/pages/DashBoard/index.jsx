import "../../styles/globalstyles.css";
import "../../styles/reset.css";
import "./dashboard.css";
import { v4 as uuid } from "uuid";
import Form from "../../../components/Form";
import TotalMoney from "../../../components/TotalMoney";
import List from "../../../components/List";
import logo from "../../assets/imagens/NuKenzie2.svg";
import { useState } from "react";

function DashBoard({ setIsDash }) {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <header className="dash_header">
        <div className="dash_nukenzie">
          <img src={logo} alt="Nu kenzie" />
        </div>
        <button
          type="button"
          className="btn_logout"
          onClick={() => setIsDash(false)}
        >
          Inicio
        </button>
      </header>
      <main className="dash_main">
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />

          <TotalMoney listTransactions={listTransactions} />
        </div>

        <section>
          <h3 className="finantial_summary">Resumo financeiro</h3>
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </section>
      </main>
    </>
  );
}

export default DashBoard;
