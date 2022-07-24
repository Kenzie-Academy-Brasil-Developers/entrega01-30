import { Div } from "./styledTotalMoney";

function TotalMoney({ isTransaction }) {
  const result = isTransaction.reduce((a, b) => b.isValue + a, 0);

  return (
    <Div>
      <h3>Valor total:</h3>
      <span>R$ {result},00</span>
    </Div>
  );
}

export default TotalMoney;
