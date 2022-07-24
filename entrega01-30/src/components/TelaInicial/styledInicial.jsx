import styled from "styled-components";

export const Section = styled.section`
  background-color: #212529;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  font-weight: bolder;
  flex-direction: column;
  color: white;
  @media screen and (min-width: 1000px){
        flex-direction: row;
      }

  div {
    img{
      display: none;


      @media screen and (min-width: 1000px){
        display: flex;
      }

    }


    opacity: 0;
    animation: opacity 2s forwards;

    @keyframes opacity {
      100% {
        opacity: 1;
      }
    }
  }

  h1 {
    font-size: 1.7rem;
    span {
      color: rgba(253, 55, 126, 1);
    }
  }

  h2 {
    font-size: 2.5rem;
  }
  p {
    font-weight: 400;
  }

  button {
    width: 15rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: transparent;
    color: white;
    background-color: rgba(253, 55, 126, 1);
    font-weight: bold;
  }
`;
