import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  height: max-content;
  display: flex;
  padding-top: 4rem;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 1008px) {
    flex-wrap: nowrap;
  }
`;

export const Section = styled.section`
  opacity: 0;
  animation: teste 2s forwards;

  @keyframes teste {
    100% {
      opacity: 1;
    }
  }
`;
