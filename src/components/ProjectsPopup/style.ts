import styled, { css } from "styled-components";

interface PopUp{
  open: boolean;
  show: boolean;
}
export const Container = styled.div<PopUp>`
  ${(props) => props.open ? 
    css`
      #hold{
        width:1160px; 
      }
    `: css`
      #hold{
        width: 960px; 
      }
  `}

  ${(props) => !props.show ? 
    css`
      div {
        visibility: hidden;
      }
  `: css`
  `}

  color: ${props => props.theme.cor.titulo};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  
  button:nth-child(1) {
    position: absolute;
    top: 4vh;
    right: 3.5vw;
    font-size: 1.9em;
    height: 30px;
    width: 30px;
    border: 0;
    background: none;
  }

  #hold{
    position: relative;
    height: 560px;
    background: ${props => props.theme.cor.fundo};
    display: flex;
    flex-direction: column;
    padding: 35px;

    button{
      svg{
        color: ${props => props.theme.cor.titulo}
      }
    }
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    #hold{
      width: 910px;
      height: 495px;
    }
  }

  @media (max-width: 768px)  {
    #hold{
      width: 685px;
      height: 480px;
    }
  }
`;

export const TitlePopUp = styled.div`
  width: 52vw;
  height: 11vh;
  padding: 10px;
  font-weight: 500;

  h2 {
    color: ${props => props.theme.cor.secaoTitulo};
    font-size: 1.15em;
  }

  h1 {
    font-size: 1.4em;
    font-weight: bold;
  }
`;

export const InfosPopup = styled.div`
  height: 59vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

interface ContainerProps {
  open: boolean;
}

export const DetailsPopup = styled.div<ContainerProps>`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  ${(props) => props.open ? 
    css`
      width: 78.5vw;
    `: css`
      width: 64vw;
    `}

  ${(props) => props.color === "ANDAMENTO" &&
    css`
      h1{
        color: ${props => props.theme.cor.andamentoStatus};
      }
    `}

  ${(props) => props.color === "CONCLUÍDO" && 
    css`
      h1{
        color: ${props => props.theme.cor.concluidoStatus};
      }
    `}

  ${(props) => props.color === "ATRASADO" &&
    css`
      h1{
        color: ${props => props.theme.cor.atrasadoStatus};
      }
    `}

  h1 {
    font-size: 1.5em;
    font-weight: 700;
  }
`;


export const InfosGerais = styled.div<ContainerProps>`

  ${(props) => props.open ? 
    css`
      width: 27vw;
      transition: 1s;

    `: css`
      width: 32vw;
      transition: 0s;
    `}

  height: 23vh;

  p {
    font-size: .75em;
    margin: 5px;
  }
  div:nth-child(2) {
    padding: 20px;
  }
`;

export const Objetivo = styled.div<ContainerProps>`
  ${(props) => props.open ? 
    css`
      width: 27vw;
      transition: 1s;
    `: css`
      width: 32vw;
      transition: 0s;
    `}

  height: 28vh;
  display: flex;
  flex-direction: column;
  margin-top: 34px;

  h1 {
      margin-bottom: 17px;
  }
  
  p {
      width: 25vw;
      height: 20vh;
      align-self: center;
      overflow-y: scroll;
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    
  }
`;

 export const Horas = styled.div<ContainerProps>`

  ${(props) => props.open ? 
    css`
      width: 30vw;
      transition: 1s;
    `: css`
      width: 32vw;
      transition: 0s;
    `}

  height: 28.5vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) and (min-width: 769px)  {
    
  }
 `;

 export const HorasApontadas = styled.div`
  width: 26vw;
  height: 26vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  div:nth-child(2) {
    height: 13vh;
    width: 11vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      font-size: .75em;
      display: flex;
      justify-content: space-between;

      span {
        color: ${props => props.theme.cor.data};
      }
    }
  }
 `;

export const Skills = styled.div<ContainerProps>`
  ${(props) => props.open ? 
    css`
      width: 29vw;
      transition: 1s;
    `: css`
      width: 33vw;
      transition: 0s;
    `}

  height: 29vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  button:nth-child(2) {
    border: 0;
    width: 28.1vw;
    height: 40px;
    font-size: .9em;
    color: #fff;
    background: ${props => props.theme.cor.habilidadeBotao};
  }
`;

export const Table = styled.div`
  width: 28.1vw;
  height: 19vh;
  
  table {
    width: 28vw;
    border-collapse: collapse;
    text-align: center;

    thead {
      display: inline-flex;
      background: ${props => props.theme.cor.aprovacaoMenu};
      color: #fff;
      width: 28vw;
      height: 40px;
      font-size: .9em;
      align-items: center;
    }

    tbody {
      margin-top: 10px;
      display: block;
      height: 60px;
      overflow-y: scroll;
      border:1px solid #e2e2e280;

      tr {
        border-bottom:1px solid #e2e2e280;
      }
    }

    td {
      width: 250px;
      padding: 10px;
    }
  }
`;

export const ConsultoresAlocados = styled.div<ContainerProps>`

  ${(props) => props.open ? 
    css`
      width: 19.8vw;

      table {
        visibility: visible;
        transition-delay: 1s;
      }

      `: css`
      width: 0;

      table {
        visibility: hidden;
        transition-delay: 0s;
      }
    `}
    height: 80vh;
    
    table {
      border-collapse: collapse;
      text-align: center;
      width: 20vw;

      thead {
        background: ${props => props.theme.cor.aprovacaoMenu};
        height: 40px;
        display: inline-flex;
        width: 20vw;
        text-transform: uppercase;
        font-size: .9em;
        margin-bottom: 15px;

        tr {
          font-size: .9em;
          height: 40px;
          width:20vw;
          padding:12px;
        }

        td:nth-child(1) {
          color:#fff;
          width: 7vw;
        }
        
        td:nth-child(2) {
          color:#fff;
          max-width: 13vw;
        }
      }
        
      tbody {
        height: 297px;
        overflow-y: auto;
        display: block;
        border: 1px solid #e2e2e280;

        tr {
          font-size: .9em;
          width: 20vw;
          border: 1px solid #e2e2e280;
        }

        td:nth-child(1) {
          padding: 15px;
          width: 7vw;
          border-right: 1px solid #e2e2e280;
        }
        
        td:nth-child(2) {
          max-width: 13vw;
          border-right: 1px solid #e2e2e280;
        }
      }
    }
`;