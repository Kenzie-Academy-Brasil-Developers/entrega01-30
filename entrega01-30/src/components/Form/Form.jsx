import { useState } from "react";
import {
  Formu,
  DivFirst,
  DivSecond,
  InputDescription,
  DivButton,
  Section,
} from "./styled";
import TotalMoney from "../TotalMoney/TotalMoney";

function Form({ setIsTransaction, isTransaction, sucess, error, alerta }) {
  const [isDescription, setIsDescription] = useState("");
  const [isValue, setIsValue] = useState("");
  const [isType, setIsType] = useState("");

  function addTransaction() {

    if (
      isDescription.trim() !== "" &&
      isType.trim() !== "" &&
      isValue.trim() !== ""
    ) {
      if (isTransaction.length <= 0) {
        const Transaction = {
          isDescription,
          isValue: parseInt(isValue),
          isType,
        };
        sucess();
        setIsTransaction([...isTransaction, Transaction]);
      } else if (isTransaction.length > 0) {
       const text = isTransaction.find((transaction) => transaction.isDescription === isDescription)
          if (text === undefined) {
            const Transaction = {
              isDescription,
              isValue: parseInt(isValue),
              isType,
            };
            sucess();
            setIsTransaction([...isTransaction, Transaction]);
          }
          else{
            alerta();
          }
      }
    } 
    else {
      error();
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Section>
      <Formu onSubmit={handleSubmit}>
        <DivFirst>
          <label className="label1">Descrição</label>
          <InputDescription
            type="text"
            value={isDescription}
            onChange={(event) => {
              setIsDescription(event.target.value);
            }}
            required
          />
          <label className="label2">Ex: Compra de roupas</label>
        </DivFirst>
        <DivSecond>
          <div>
            <label className="labelValue">Valor</label>
            <input
              type="number"
              value={isValue}
              onChange={(event) => setIsValue(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="labelType">Tipo de valor</label>
            <select
              placeholder="Nome"
              value={isType}
              onChange={(event) => setIsType(event.target.value)}
              required
            >
              <option value="">Tipo</option>
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </DivSecond>
        <DivButton>
          <button type="submit" onClick={addTransaction}>
            Inserir valor
          </button>
        </DivButton>
      </Formu>

      <TotalMoney isTransaction={isTransaction} />
    </Section>
  );
}

export default Form;
