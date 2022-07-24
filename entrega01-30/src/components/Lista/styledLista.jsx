import styled from "styled-components";

export const Section = styled.section`
  width: 90vw;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 702px;

  @media screen and (min-width: 1008px) {
    max-width: 702px;
    margin-top: 0;
  }

  .div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: max-content;
    flex-wrap: wrap;

    h3 {
      padding-left: 1rem;
    }

    div {
      display: flex;
      gap: 1rem;
      padding-right: 1.8rem;

      button {
        width: max-content;
        height: 2.3rem;
        border-radius: 0.5rem;
        border: transparent;
        padding: 0 1rem;
        font-weight: bold;
        cursor: pointer;
      }

      .buttonTodos {
        color: white;
        background-color: rgba(253, 55, 126, 1);
      }
    }
  }
`;

export const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 40rem;
  width: 100%;
  overflow-y: auto;
  img {
    width: 100%;
  }

  li {
    display: flex;
    width: 95%;
    min-height: 6rem;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 0.3rem;
    background-color: #f8f9fa;
    box-shadow: 10px 7px 30px -25px rgba(0, 0, 0, 0.75);

    .divFirst {
      transform: translate(1rem, 0.2rem);
      gap: 1rem;
      display: flex;
      flex-direction: column;
      h3 {
        margin: 0;
      }
      span {
        opacity: 0.7;
      }
    }
    .divSecond {
      gap: 2rem;
      transform: translate(-1rem, 0.2rem);
      display: flex;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: transparent;
        background-color: white;
      }
      button > :hover {
        cursor: pointer;
      }
      span {
        font-weight: bold;
      }
    }
  }
`;
