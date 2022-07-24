import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Lista from "./components/Lista/Lista";
import TelaIncial from "./components/TelaInicial/TelaIncial";

import { Div, Section } from "./styledApp";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isTransaction, setIsTransaction] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  function filter(description) {
    const filtered = isTransaction.filter(
      (trasaction) => trasaction.isDescription !== description
    );
    setIsTransaction(filtered);
  }

  function sucess() {
    toast.success("Adicionado!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function error() {
    toast.error("Inserir em todos os campos!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return isLogged ? (
    <Section>
      <Header setIsLogged={setIsLogged} />
      <Div>
        <Form
          setIsTransaction={setIsTransaction}
          isTransaction={isTransaction}
          sucess={sucess}
          error={error}
        />
        <Lista
          isTransaction={isTransaction}
          setIsTransaction={setIsTransaction}
          filter={filter}
        />
      </Div>
      <ToastContainer />
    </Section>
  ) : (
    <TelaIncial setIsLogged={setIsLogged} />
  );
}

export default App;
