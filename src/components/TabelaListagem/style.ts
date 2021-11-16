import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 130px;
  margin-top: 50px;
  margin-bottom: 40px;
  height: 350px;

  table{
    border-collapse: collapse;
    width: 90%;
  }

  thead{
    text-transform: uppercase;
    font-size: .9em;
  }

  thead tr{
    color: #fff;

    td{
      text-align: center;
      margin: auto;
      width: 100%;
      height: 56px;

      :nth-child(1){
        background: ${props => props.theme.cor.thead};
      }

      :nth-child(2){
        background: ${props => props.theme.cor.habilidadeBotao};
      }
    }
  }

  tbody {
    height: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    display: block;
    border: 1px solid ${props => props.theme.cor.bordaTabela};
  }

  tr{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-top: 0;
    height: 56px;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
    font-size: .9em;
    border-bottom: 1px solid ${props => props.theme.cor.bordaTabela};

    td{
      width: 150px;
    }
  } 
`;
