import "./card.css";
import trash from "../../src/assets/imagens/ButtonTrasht.svg";

function Card() {
  return (
    <li>
      <div>
        <h3>Salário - Mês Dezembro</h3>
        <p>
          <span>R$</span> 6.000,00
        </p>
        <img src={trash} alt="lixeira" />
      </div>
      <div>
        <p>Entrada</p>
      </div>
    </li>
  );
}

export default Card;
