import { v4 as uuid } from "uuid";
import Card from "../Card";
import "./list.css";
// import { useEffect } from "react";  useEffect(() => , [listTransactions]);
// setListTransactions(...listTransactions, "a");

// if (Array.isArray(listTransactions) && listTransactions.length === 0) {
//   return (
//     <h3 className="entryless">Você ainda não possui nenhum lançamento</h3>
//   );
// } else {
//   return (
//     <ul>
//       {listTransactions.map((item, index) => {
//         return <Card key={index} />;
//       })}
//     </ul>
//   );

// }

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
