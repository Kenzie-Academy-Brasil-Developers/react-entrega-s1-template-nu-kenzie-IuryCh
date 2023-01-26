import "./form.css";

function Form({ list, setList }) {
  return (
    <>
      <form className="container_dash--form">
        <label className="description_label" htmlFor="text">
          Descrição
        </label>
        <input
          className="description_input"
          type="text"
          name="text"
          id="text"
          placeholder="Digite sua descrição aqui"
        />
        <span className="description_exemplo">Ex: compra de roupas</span>
        <div className="box_finantion-data">
          <div className="box_howmuch">
            <label htmlFor="number">Valor</label>
            <input type="text" name="number" id="number" />
          </div>
          <div>
            <label htmlFor="value">Tipo de valor</label>
            <select name="value" id="value">
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>

        <button type="submit">Inserir Valor</button>
      </form>
    </>
  );
}
export default Form;
