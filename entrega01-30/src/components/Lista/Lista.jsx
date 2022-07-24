import { Section, Ul } from "./styledLista";
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";

function Lista({ isTransaction, filter, filtrar }) {
  function remove(description) {
    filter(description);
    toast.success("Removido!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <Section>
      <div className="div">
        <h3>Resumo finaceiro</h3>
        <div>
          <button className="buttonTodos" onClick={filtrar}>
            Todos
          </button>
          <button onClick={filtrar}>Entradas</button>
          <button onClick={filtrar}>Despesas</button>
        </div>
      </div>

      <Ul>
        <>
          {isTransaction.length > 0 ? (
            <>
              {isTransaction.map((transaction, index) => (
                <li
                  key={index}
                  style={{
                    borderLeft:
                      transaction.isType === "Despesa"
                        ? "5px solid red"
                        : "5px solid rgb(4, 255, 0)",
                  }}
                >
                  <div className="divFirst">
                    <h3>{transaction.isDescription}</h3>
                    <span>{transaction.isType}</span>
                  </div>
                  <div className="divSecond">
                    <span>R$ {transaction.isValue},00 </span>
                    <button onClick={() => remove(transaction.isDescription)}>
                      <BsFillTrashFill />
                    </button>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <>
              <img
                src="https://conteudo-kenzie-fullstack.vercel.app/modulo_3/entregas/entrega_nu_kenzie/img/entrega_nu_kenzie_5.jpg"
                alt="Voce não possui nada"
              />
            </>
          )}
        </>
      </Ul>
    </Section>
  );
}

export default Lista;
