import { useState } from "react";
import "./totalmoney.css";

function TotalMoney({ listTransactions }) {
  const [currentValue, setCurrentValue] = useState(0);

  const totalValue = listTransactions.reduce((pV, cV) => {
    let initial = 0;
    if (cV.select === "Despesa") {
      initial = cV.number * -1;
    } else if (cV.select === "Entrada") {
      initial = cV.number;
    }
    console.log(typeof initial);
    return pV + initial;
  }, 0);

  // const totalOutputs = listTransactions.reduce((pV, cV) => {
  //   if (cV.select === "Despesa") {
  //     return (cV.number += pV);
  //   }
  // }, 0);

  // const totalValue = listTransactions.reduce((pV, cV) => {
  //   console.log(listTransactions);
  //   console.log("pV:" + pV);
  //   console.log("cV:" + cV.number);
  //   console.log(cV.number + pV);
  //   return cV.number + pV;
  // }, 0);

  return (
    <>
      {listTransactions.length !== 0 ? (
        <div className="box_totalMoney">
          <p className="total_value">
            Valor Total: <span className="total_value--span">{totalValue}</span>
          </p>
          <span className="total_value--description">
            O valor se refere ao saldo
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default TotalMoney;
{
  /* <div className="box_totalMoney">
        <p className="total_value">
          Valor Total: <span className="total_value--span">$ 6000</span>
        </p>
        <span className="total_value--description">
          O valor se refere ao saldo
        </span>
      </div>
      */
}
