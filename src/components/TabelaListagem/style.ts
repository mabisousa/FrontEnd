import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 130px;
  margin-top: 50px;
  margin-bottom: 40px;

  table{
    border-collapse: collapse;
  }

  thead{
    text-transform: uppercase;
    font-size: .9em;
    background: ${props => props.theme.cor.thead};
    
    tr{
      color: #fff;
    }
  }

  tbody {
    height: 150px;
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
    height: 56px;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
    font-size: .9em;
    border-bottom: 1px solid ${props => props.theme.cor.bordaTabela};

    td{
      width: 150px;
    }
  } 

  .cabecalho{
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    p:nth-child(2){
      width: 300px;
    }
  }

  .cabecalhoDetalhe{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
  }

  .detalhe{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
  }

  #informacoes{
    padding-left: 50px;
  }

  #apontamentos{
    padding-right: 50px;
  }

  #responsavel, #valorAprovado, #valorHora, #horasAprovadas, #totalAprovados{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25vw;
    padding: .3em;
  }
`;
