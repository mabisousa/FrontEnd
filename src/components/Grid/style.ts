import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  .box{
    width: 50px;
    height: 35px;
    margin: 0 5px 5px 0;
  }

  .one{
    background: #B4DDFB;
  }

  .two{
    background: #90C0E3;
  }

  .three{
    background: #448DCA;
  }

  .four{
    background: #2E5CA6;
  }

  .five{
    background: #023A67;
  }

  @media (max-width: 768px)  {
    .box{
      width: 40px;
      height: 25px;
      margin: 5px 5px 5px 0;
    }
  }
`;