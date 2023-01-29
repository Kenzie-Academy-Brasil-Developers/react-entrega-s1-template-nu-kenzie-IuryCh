import "./form.css";
import real from "../../src/assets/imagens/R$.svg";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(0);
  const [select, setSelect] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newObj = {
      id: uuid(),
      description: description,
      number: +number,
      select: select,
    };

    setListTransactions([...listTransactions, newObj]);
  }

  return (
    <>
      <form className="container_dash--form" onSubmit={handleSubmit}>
        <label className="description_label" htmlFor="description">
          Descrição
        </label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          className="description_input"
          type="text"
          id="description"
          placeholder="Digite sua descrição aqui"
          required
        />
        <span className="description_exemplo">Ex: compra de roupas</span>
        <div className="box_finantion-data">
          <div className="box_howmuch">
            <label htmlFor="number">Valor</label>
            <input
              onChange={(event) => setNumber(event.target.value)}
              className="box_howmuch--input"
              type="number"
              id="number"
              required
            />
            <img src={real} />
          </div>
          <div className="box_typevalue">
            <label htmlFor="value">Tipo de valor</label>
            <select
              onChange={(event) => {
                setSelect(event.target.value);
              }}
              className="box_typevalue--select"
              name="value"
              id="value"
              required
            >
              <option value=""> Choose </option>
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button className="btn_form" type="submit">
          Inserir Valor
        </button>
      </form>
    </>
  );
}
export default Form;
