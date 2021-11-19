import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 130px;
  margin-top: 50px;
  margin-bottom: 40px;
  height: 350px;

  .header{
    width: 79%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    p:nth-child(2){
      width: 300px;
    }
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
  margin-bottom: 20px;
  height: 30px;

`;

export const Tabela = styled.div`
  width: 24vw;

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

      :nth-child(1){
        background: ${props => props.theme.cor.thead};
      }

      :nth-child(2){
        background: ${props => props.theme.cor.habilidadeBotao};
      }
    }
  }

  tbody {
    height: 170px;
    overflow-y: scroll;
    overflow-x: hidden;
    display: block;
    border: 1px solid ${props => props.theme.cor.bordaTabela};
    width: 290px;
  }

  tr{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-top: 0;
    height: 45px;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
    font-size: .9em;
    width: 21vw;
    border-bottom: 1px solid ${props => props.theme.cor.bordaTabela};

    td{
      width: 155px;
    }
    
    svg{
      margin-right: 20px;
      height: 20px;
      width: 20px;
    }
  } 

`;

export const Descricao = styled.div` 
  display: flex;
  flex-direction: column;
  width: 28vw;

  p {
      width: 25vw;
      height: 170px;
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
      height: 170px;
      font-size: 1em;
      overflow-y: scroll;
      border: 1px solid ${props => props.theme.cor.bordaTabela};
    }

`;