import styled from 'styled-components';

export const Container = styled.div`
  margin: 8vh 0 7vh 10vw;
  height: 58vh;

  .cabecalho{
    width: 61vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    p:nth-child(2){
      width: 22vw;
    }
  }

  .accordion{
    background: ${props => props.theme.cor.fundoCard };
    color: ${props => props.theme.cor.titulo};
  }

  svg{
    color: ${props => props.theme.cor.titulo};
  }

  section{
    width: 16vw;
    display: flex;
    flex-direction: row;
  }

  p, h1{
    font-size: 1em;
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Responsavel = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 20vw;
  margin-bottom: 3vh;
  height: 4vh;
`;

export const Tabela = styled.div`
  width: 24vw;

  table{
    border-collapse: collapse;
  }

  thead{
    text-transform: uppercase;
    font-size: 1em;
  }

  thead tr{
    color: #fff;

    td{

      :nth-child(1){
        background: ${props => props.theme.cor.thead};
      }

      :nth-child(2){
        background: ${props => props.theme.cor.habilidadeBotao};
      }
    }
  }

  tbody {
    height: 26vh;
    overflow-y: scroll;
    overflow-x: hidden;
    display: block;
    border: 1px solid ${props => props.theme.cor.bordaTabela};
    width: 21vw;
  }

  tr{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-top: 0;
    height: 7vh;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
    width: 21vw;
    color: ${props => props.theme.cor.titulo};
    border-bottom: 1px solid ${props => props.theme.cor.bordaTabela};

    td{
      width: 12vw;
      font-size: .9em;
    }
    
    svg{
      margin-right: 2vw;
      height: 3vh;
      width: 2vw;
    }
  } 
`;

export const Descricao = styled.div` 
  display: flex;
  flex-direction: column;
  width: 28vw;

  p {
    width: 25vw;
    height: 26vh;
    font-size: 1em;
    overflow-y: scroll;
    border: 1px solid ${props => props.theme.cor.bordaTabela};
  }
`;

export const Apontamento = styled.div` 
  display: flex;
  flex-direction: column;
  width: 25vw;

  p {
    width: 25vw;
    height: 26vh;
    font-size: 1em;
    overflow-y: scroll;
    border: 1px solid ${props => props.theme.cor.bordaTabela};
  }
`;