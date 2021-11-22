import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 130px;
  margin-top: 50px;
  margin-bottom: 40px;

  svg{
    color: ${props => props.theme.cor.titulo};
  }

  table{
    border-collapse: collapse;
  }

  thead{
    text-transform: uppercase;
    font-size: .9em;
    background: ${props => props.theme.cor.thead};
    border: 1px solid ${props => props.theme.cor.bordaTabela};
    border-bottom: none;
    
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
    border-top: none;
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
    color: ${props => props.theme.cor.titulo};
    border-bottom: 1px solid ${props => props.theme.cor.bordaTabela};

    td{
      width: 150px;
    }
  } 

  .accordion{
    background: ${props => props.theme.cor.fundoCard };
    color: ${props => props.theme.cor.titulo};
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
    font-size: .9em;
  }

  p, h1{
    font-size: 1em;
  }

  h1{
    margin-bottom: 10px;
  }
`;
