import { Button, HeaderStyle, Span } from "./styledHeader";

function Header({ setIsLogged }) {
  const logout = () => {
    setIsLogged((old) => !old);
  };

  return (
    <HeaderStyle>
      <h1>
        <Span>Nu</Span> Kenzie
      </h1>
      <Button onClick={logout}>Inicio</Button>
    </HeaderStyle>
  );
}

export default Header;
