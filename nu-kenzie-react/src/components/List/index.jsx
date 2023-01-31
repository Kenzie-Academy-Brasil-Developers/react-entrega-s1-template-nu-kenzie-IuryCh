import Card from "../Card";
import "./list.css";

function List({ listTransactions, setListTransactions }) {
  return (
    <>
      {listTransactions.length === 0 ? (
        <h3 className="entryless">Você ainda não possui lançamentos</h3>
      ) : (
        <ul>
          {listTransactions.map((item) => {
            return (
              <Card
                key={item.id}
                item={item}
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default List;
