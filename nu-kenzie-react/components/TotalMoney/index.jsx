import "./totalmoney.css";

function TotalMoney({ listTransactions }) {
  return (
    <>
      {listTransactions.length !== 0 ? (
        <div className="box_totalMoney">
          <p className="total_value">
            Valor Total: <span className="total_value--span">$ 6000</span>
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
