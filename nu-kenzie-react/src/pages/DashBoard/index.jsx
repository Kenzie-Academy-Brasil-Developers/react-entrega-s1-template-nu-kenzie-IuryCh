import "../../styles/globalstyles.css";
import "../../styles/reset.css";
import "./dashboard.css";
import Header from "../../../components/Header";
import Form from "../../../components/Form";
import TotalMoney from "../../../components/TotalMoney";
import List from "../../../components/List";

import { useState } from "react";

function DashBoard({ setIsDash }) {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <Header setIsDash={setIsDash} />
     
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
