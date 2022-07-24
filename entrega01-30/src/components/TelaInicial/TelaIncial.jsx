import { Section } from "./styledInicial";
import card from "../assets/card.png";

function TelaIncial({ setIsLogged }) {
  const login = () => {
    setIsLogged((old) => !old);
  };

  return (
    <Section>
      <div>
        <h1>
          <span>Nu</span> Kenzie
        </h1>
        <h2>
          Centralize o <br /> controle das suas <br /> finanças
        </h2>
        <p>de forma rápida e segura</p>
        <button onClick={login}>Iniciar</button>
      </div> 
      <div>
        <img src={card} alt="card" />
      </div>
    </Section>
  );
}

export default TelaIncial;
