import styled, { css } from "styled-components";

interface PopUp{
  aberto: boolean;
  mostrar: boolean;
}

export const Container = styled.div<PopUp>`
  ${(props) => props.aberto ? 
    css`
      #segura{
        width:84vw; 
      }

    `: css`
      #segura{
        width: 75vw; 
      }
  `}

  ${(props) => !props.mostrar ? 
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
    border: 0;
    background: none;
  }

  #segura{
    position: relative;
    height: 90vh;
    background: ${props => props.theme.cor.fundo};
    display: flex;
    flex-direction: column;
    padding: 3vw;

    button{
      svg{
        color: ${props => props.theme.cor.titulo}
      }
    }
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    
    ${(props) => !props.aberto ? 
      css`
        #segura{
          width: 71vw;
        }
      `: css`
        #segura{
          width: 90vw;
        }
    `}
  }

  @media (max-width: 768px)  {
    #segura{
      width: 90vw;
      height: 87vh;
    }
  }
`;

export const TituloPopUp = styled.div`
  width: 52vw;
  height: 11vh;
  padding: 1vw;
  font-weight: 500;

  h2 {
    color: ${props => props.theme.cor.secaoTitulo};
    font-size: 1.15em;
  }

  h1 {
    font-size: 1.4em;
    font-weight: bold;
  }

  @media (max-width: 768px)  {
    h2 {
      font-size: 1em;
    }

    h1 {
      font-size: 1.25em;
    }
  }
`;

export const InfosPopup = styled.div`
  height: 59vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`;

interface ContainerProps {
  aberto: boolean;
  cor?: string,
}

export const InfosGerais = styled.div<ContainerProps>`

  ${(props) => props.aberto ? 
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
    margin: 1vh;
  }

  div:nth-child(2) {
    padding: 3vh;
  }

  h1{
    font-size: 1em;
  }

  @media (max-width: 768px)  {
    p {
      font-size: .60em;
    }
    h1{
      font-size: .85em;
    }
  }
`;

export const Objetivo = styled.div<ContainerProps>`
  ${(props) => props.aberto ? 
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
  margin-top: 5vh;

  h1 {
    margin-bottom: 3vh;
  }
  
  p {
    width: 25vw;
    height: 20vh;
    font-size: 1em;
    align-self: center;
    overflow-y: scroll;
  }
  
  @media (max-width: 768px)  {

    ${(props) => props.aberto ? 
    css`
      width: 29vw;
      transition: 1s;
    `: css`
      width:40vw; 
      p {
        width: 37vw;
      }     
    `}
    h1, p{
      font-size: .85em;
    }
  }
  
`;

 export const Horas = styled.div<ContainerProps>`

  ${(props) => props.aberto ? 
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

  h1{
    font-size: 1em;
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    ${(props) => props.aberto ? 
    css`
      width: 30vw;
    `: css`
      width: 40vw;
    `}
  }

  @media (max-width: 768px)  {
    h1{
      font-size: .85em;
    }
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
    @media (max-width: 768px)  {
      p{     
        font-size: .65em;
      }
    }
  }
 `;

export const Skills = styled.div<ContainerProps>`
  ${(props) => props.aberto ? 
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
    height: 6vh;
    font-size: .9em;
    color: #fff;
    background: ${props => props.theme.cor.habilidadeBotao};
  }

  @media (max-width: 768px)  {
    width: 26vw;
    button:nth-child(2) {
      font-size: .75em;
       width: 30.1vw;
       margin-left: 2vw;
    }
  }
`;

export const Tabela = styled.div`
  width: 28vw;
  height: 19vh;
  
  table {
    width: 28vw;
    border-collapse: collapse;
    text-align: center;
    font-size: 1em;

    thead {
      display: inline-flex;
      background: ${props => props.theme.cor.aprovacaoMenu};
      color: #fff;
      width: 28vw;
      height: 6vh;
      font-size: .9em;
      align-items: center;
    }

    tbody {
      margin-top: 2vh;
      display: block;
      height: 10vh;
      overflow-y: scroll;
      border:1px solid #e2e2e280;

      tr {
        border-bottom:1px solid #e2e2e280;
      }
    }

    td {
      width: 17vw;
      padding: 1vw;
    }
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    width: 28.1vw;
  }

  @media (max-width: 768px)  {
    table{
      width: 30vw;
      font-size: .75em;
      thead{
        width: 30vw;
      }
      td{
        width: 18vw;
      }
    }
  }
`;

export const ConsultoresAlocados = styled.div<ContainerProps>`

  ${(props) => props.aberto ? 
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
        height: 6vh;
        display: inline-flex;
        width: 20vw;
        text-transform: uppercase;
        font-size: .9em;
        margin-bottom: 2vh;

        tr {
          font-size: .9em;
          height: 6vh;
          width:20vw;
          padding:2vh;
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
        height: 45vh;
        overflow-y: auto;
        display: block;
        border: 1px solid #e2e2e280;

        tr {
          font-size: .9em;
          width: 20vw;
          border: 1px solid #e2e2e280;
        }

        td:nth-child(1) {
          padding: 1vw;
          width: 7vw;
          border-right: 1px solid #e2e2e280;
        }
        
        td:nth-child(2) {
          width: 13vw;
          border-right: 1px solid #e2e2e280;
        }
      }
    }

    @media (max-width: 1024px) and (min-width: 769px)  {
      ${(props) => props.aberto ? 
      css`
      width: 21vw;
      `: css`
      width: 0;
    `}
      
      table{
        thead{
          width: 23vw;
          tr{
            width: 20vw;
          }
          td:nth-child(1) {
            width: 7vw;
          }
          td:nth-child(2) {
            width: 13vw;
          }
        }
        tbody{
          height: 257px;
          td:nth-child(1) {
            width: 9vw;
          }
          td:nth-child(2) {
            width: 16vw;
          }
        }
      }
    }

    @media (max-width: 768px)  { 
      table{
        font-size: .75em;
        thead{
          td:nth-child(1) {
            width: 7vw;
          }
          td:nth-child(2) {
            width: 13vw;
          }
        }
        tbody{
          td:nth-child(1) {
            width: 9.5vw;
          }
        }
      }
    }
`;

export const DetalhesPopup = styled.div<ContainerProps>`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  ${(props) => props.aberto ? 
    css`
      width: 78.5vw;
    `: css`
      width: 64vw;
    `}

  ${(props) => props.cor === "ANDAMENTO" && 
    css`
      h1{
        color: ${props => props.theme.cor.andamentoStatus};
      }
    `}

  ${(props) => props.cor === "CONCLUÍDO" && 
    css`
      h1{
        color: ${props => props.theme.cor.concluidoStatus};
      }
    `}

  ${(props) => props.cor === "ATRASADO" &&
    css`
      h1{
        color: ${props => props.theme.cor.atrasadoStatus};
      }
    `}

  h1 {
    font-size: 1.5em;
    font-weight: 700;
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    ${(props) => props.aberto ? 
    css`
      width: 84vw;
    `: css`
      width: 62.5vw;
    `}
  }

  @media (max-width: 768px)  {
    width: 82vw;
  }
`;