import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 8vh 0 7vh 10vw;
  height: 58vh;

  svg{
    color: ${props => props.theme.cor.titulo};
  }

  table{
    border-collapse: collapse;

    button{
      background: transparent;
      border: 0;
      font-size: 1.25em;
      svg{
        color: ${props => props.theme.cor.titulo};
      }
    }
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
    margin-bottom: 5px;
    border: 1px solid ${props => props.theme.cor.bordaTabela};
    box-shadow: none;
  }

  .cabecalho{
    width: 61vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    p:nth-child(2){
      width: 22vw;
    }
  }

  p, h1{
    font-size: 1em;
  }

  h1{
    margin-bottom: 10px;
  }
`;

interface Description {
  open: boolean;
}

export const Descricoes = styled.div<Description>`
  width:0;
  right: 50%;
  height: 206px;
  background: transparent;
  position: absolute;
  top: 38.7%;
  z-index: 99999;
  border: 1px solid ${props => props.theme.cor.bordaTabela};

  ${(props) => !!props.open ?
    css`
      width: 380px;
      visibility: visible;
      background: #fff;
      transition: 1.5s;
      color: ${props => props.theme.cor.titulo};

      header {
        width: 100%;
        height: 55px;
        border-bottom: 1px solid ${props => props.theme.cor.bordaTabela};
        padding-left: 15px;
        display: flex;
        align-items: center;
        font-size: 1em;
        background: ${props => props.theme.cor.thead};

        p {
          transition: 0.5s;
          transition-delay: 1.5s;
        }
      }

      div {
        width: 100%;
        height: 151px;
        padding: 10px;
        background: ${props => props.theme.cor.fundoCard};
        border-bottom: 1px solid ${props => props.theme.cor.bordaTabela};

        p {
          transition: 0.5s;
          transition-delay: 1.5s;
        }
      }
   
    ` : css`
        visibility: hidden;
        width: 0px;

        header p, span{
          display: none;
        }

        div {
          display: none;
        }
    `}
    
  @media (max-width: 768px)  {
    right: 0;
    height: 0;
    top: 46vh;
    border: 1px solid #8B8787;
    width: 561px;

    ${(props) => !!props.open ?
    css`
      height: 150px;

      header {
        background: #0075B1;
        color: #fff;
      }
    ` : css`
      
    `}
  }
`;

export const CabecalhoDetalhes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const Detalhes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const Informacoes = styled.div`
  padding-left: 50px;
`;

export const Dados = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25vw;
  padding: .3em;
  font-size: .9em;  
`;

export const Apontamentos = styled.div`
  padding-right: 50px;
`;