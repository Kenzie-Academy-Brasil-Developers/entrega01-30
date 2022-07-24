import styled from "styled-components";

export const Formu = styled.form`
  border: solid 1px #00000013;
  width: 23rem;
  height: 21rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
`;

export const DivFirst = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .label1 {
    font-size: 15px;
    transform: translate(-8.7rem, -0.5rem);
  }
  .label2 {
    font-size: 12px;
    transform: translate(-6.7rem);
    opacity: 0.6;
  }
`;

export const DivSecond = styled.div`
  display: flex;
  height: 40%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  div {
    display: flex;
    flex-direction: column;

    input {
      width: 9rem;
      height: 2.5rem;
      border: transparent;
      background-color: #f4f4f4;
      padding-left: 0.5rem;
      border-radius: 0.5rem;
    }
    select {
      width: 9rem;
      height: 2.9rem;
      border: transparent;
      background-color: #f4f4f4;
      padding-left: 0.5rem;
      border-radius: 0.5rem;
    }
    label {
      transform: translateY(-1rem);
    }
  }
`;

export const InputDescription = styled.input`
  width: 90%;
  height: 2.5rem;
  font-size: 1rem;
  padding-left: 1rem;
  border-radius: 0.5rem;
  border: transparent;
  background-color: #f4f4f4;
`;

export const DivButton = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 90%;
    height: 2.6rem;
    border: transparent;
    font-weight: bold;
    border-radius: 0.5rem;
    color: white;
    background-color: rgba(253, 55, 126, 1);
    cursor: pointer;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70vw;
  align-items: center;
  @media screen and (min-width: 1008px) {
    width: 537px;
  }
`;
