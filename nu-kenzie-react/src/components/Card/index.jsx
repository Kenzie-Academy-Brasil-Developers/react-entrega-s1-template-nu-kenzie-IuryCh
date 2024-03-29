import "../../styles/reset.css";
import "../../styles/globalstyles.css";
import "./card.css";

function Card({ item, listTransactions, setListTransactions }) {
  function removeCard(event) {
    const objFiltered = listTransactions.filter((obj) => {
      return obj.id !== event.target.id;
    });

    return setListTransactions(objFiltered);
  }

  if (item.select === "Entrada") {
    return (
      <li className="container_cards green" id={item.id}>
        <div className="box_card">
          <h3 className="box_card--type"> {item.description} </h3>

          <div className="type_selected">
            <p className="type_selected--whichIs"> {item.select} </p>
          </div>

          <p className="box_card--value">
            <span>R$</span> {item.number}
          </p>

          <span
            className="trash_icon"
            alt="lixeira"
            id={item.id}
            onClick={(event) => {
              removeCard(event);
            }}
          ></span>
        </div>
      </li>
    );
  } else {
    return (
      <li className="container_cards grey" id={item.id}>
        <div className="box_card">
          <h3 className="box_card--type"> {item.description} </h3>

          <div className="type_selected">
            <p className="type_selected--whichIs"> {item.select} </p>
          </div>

          <p className="box_card--value">
            <span>R$</span> {item.number}
          </p>

          <span
            className="trash_icon"
            alt="lixeira"
            id={item.id}
            onClick={(event) => {
              removeCard(event);
            }}
          ></span>
        </div>
      </li>
    );
  }
}

export default Card;
