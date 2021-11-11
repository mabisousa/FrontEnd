import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  .caixa{
    width: 50px;
    height: 35px;
    margin: 0 5px 5px 0;
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
      width: 40px;
      height: 25px;
      margin: 5px 5px 5px 0;
    }
  }
`;