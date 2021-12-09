import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  .caixa{
    width: 3.6vw;
    height: 5.4vh;
    margin: 0 .5vw 1vh 0;
  }

  .um{
    background: #B4DDFB;
  }

  .dois{
    background: #90C0E3;
  }

  .tres{
    background: #448DCA;
  }

  .quatro{
    background: #2E5CA6;
  }

  .cinco{
    background: #023A67;
  }

  @media (max-width: 768px)  {
    .caixa{
      width: 5.2vw;
      height: 4.5vh;
      margin: 1vh .5vw 1vh 0;
    }
  }
`;