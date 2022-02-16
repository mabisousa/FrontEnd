import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width:100vw;
  height:75vh;
  padding: 1vw 8vw 1vw 8vw;
  color: ${props => props.theme.cor.titulo};

  h1 {
    font-size: 1em;
    font-weight:500;
    margin:2vh 0;
  }

  .reprovar{
    background: ${props => props.theme.cor.botaoReprovar};
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    h1 {
      font-size: 0.9em;
    }     
  }
`;


export const Botoes = styled.button`

  height: 9vh;
  padding: 1vw;
  color: #fff;
  margin-top: 9vh;
  border: none;
  background: ${props => props.theme.cor.habilidadeBotao};
  
`;

export const Infos = styled.div`
  height: 40vh;
  width: 34vw;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;

  form {
    margin-top:.5vh;
    height: 40vh;
    display: flex;
    flex-direction: column;

    
  }  

  @media (max-width: 1024px) and (min-width: 769px) {
    form{
      margin:3px 0 0 10px;
    }

    p{
      font-size: 0.65em;
      width: 80px;
    }

  }

  @media (max-width: 768px)  {
    width: 40vw;
    margin: 0 0 10px 35px;

  }
`;


export const Informacao = styled.div`

  margin: 2vh 0;
  width: 30vw;
  height: 13vh;
  
  p {
    font-size: 0.75em;
    width: auto;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1.5vh;
    
    div:nth-child(1) {
      width: 7vw;
      margin-right: 2vw;
    }

    div:nth-child(2) {
      width: 21vw;
    }
  }


  @media (max-width: 1024px) and (min-width: 769px) {

    div:nth-child(1) {
      width: 33%;
      margin-right: 5%;
    }
    
  }

  @media (max-width: 768px)  {
    
    div:nth-child(1) {
      width: 43%;
      margin-right: 5%;
    }
  }
  
`;

export const Conta = styled.div`
  height: 40vh;
  width: 27vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 1s;
  
  button {
    border: 0;
    width: 21vw;
    height: 10vh;
    font-size: .9em;
    color: #fff;
    background: ${props => props.theme.cor.habilidadeBotao};
    transition: 1s;
    position: relative;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width:21vw;
  }

  @media (max-width: 768px)  {
    width: 32vw;
  }
`;


export const Segura = styled.div`
  
    display: flex;
    flex-direction: row;
    align-items:center;
    margin: 2vh 0;

    div {
      margin-right: 2vw;
      width: 3vw;
      height: 3vw;
      border: 1px solid #8B8787;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      font-size: .9em;
    }

  .apontamentos {
    font-size: 1.12em;
    color: #7E7E7E90;
  }

  .aprovados {
    font-size: 1.12em;
    color: #13B77C;
  }

  .reprovados {
    font-size: 1.2em;
    color: #AC341A;
  }
  
  
`;

export const Apontamentos = styled.div`
  width: 22vw;
  height: 46vh;
  position: relative;

  table{
    border-collapse: collapse;
    width: 22vw;
    font-size: .9em;       
    
    button{
      background: transparent;
      border: 0;
      font-size: 1.25em;
      svg{
        color: ${props => props.theme.cor.titulo};
      }
    }
    
    thead tr{
      background: ${props => props.theme.cor.thead};
      color: #fff;
    }
            
    tbody {
      height: 22vw;
      overflow-y: scroll;
      overflow-x: hidden;
      display: block;
      border: 1px solid ${props => props.theme.cor.bordaTabela};
      border-top: none;

    }

    tr{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-bottom: 1px solid ${props => props.theme.cor.bordaTabela};
      height: 4vw;
    }

    td{
      display: flex;
      justify-content: space-evenly;
      width: 4vw;
    }
      
    td:nth-child(1){
      width: 3vw;
    }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 27vw;   
  }

  @media (max-width: 768px)  {
    margin: 10px 0 10px 35px;
    width: 73vw;
    height: 47vh;

    table{
      tbody {
        height: 35vh;
      }
    }
  }
`;

export const Titulo = styled.h1`
  font-weight:normal; 
  font-size: 1.25em;
  text-decoration: underline ${props => props.theme.cor.undeline};
  height: 9vh;
  display: flex;
  align-items: center;
  margin: 15vh 0 0 10vw;
  color: ${props => props.theme.cor.titulo};
`;

export const BarraDeProgressao = styled.div`
  height: 18vh;
  width: 58vw;
  
  div:nth-child(1) {
    height: 8vh;
    display: flex;
    justify-content: space-between;
    text-align: center; 
    padding: 0 7vw;

    p {
      width:7vw;
      height: 8vh;
      font-weight: bold;
      color: #00579D;
    }
  }

  div:nth-child(2) {
    position: relative;
    display:flex;
    justify-content: space-evenly;
    color: #fff; 
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    p {
      font-size: 0.9em;
    }     
  }

  @media (max-width: 768px)  {
    width:68vw;
    margin: 10px 0 0 20px;
    p {
      font-size: 0.85em;
    }  
  }
`;

interface PassoProps {
  ativo: boolean;
}

export const Passo = styled.section<PassoProps>`
  width: 4.6vw;
  height: 10vh;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1.5s;

  &::before {
    z-index: -2;
    content: ' ';
    position: absolute;
    top: 4.5vh;
    width: 13.5vw;
    height: 1vh;
    background: ${props => props.theme.cor.passo};
  }

  svg {
    height: 3.5vh;
    width: 3vw;
  }

  ${(props) => props.ativo ?
    css`
      background: ${props => props.theme.cor.passoAtivo};
      transition: 1s;

      &::before {
        z-index: -2;
        content: ' ';
        position: absolute;
        top: 4.5vh;
        width: 13.5vw;
        height: 1vh;
        background: ${props => props.theme.cor.passoAtivo};
        transition: 1s;
      }
  `: css`
      background: ${props => props.theme.cor.passo};
  
      &::before {
        z-index: -2;
        content: ' ';
        position: absolute;
        top: 4.5vh;
        width: 13.5vw;
        height: 1vh;
        background: ${props => props.theme.cor.passo};
      }
  `}
`;

interface PopupProps {
  mostrar: boolean;
}
    
export const Consultores = styled.div<PopupProps>`
    
  ${(props) => !!props.mostrar && css`
    transition: 200ms ease-in-out;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 101vh;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    color: ${props => props.theme.cor.titulo};
    
    .segura{
      height: 91vh;
      width: 75vw;
      background-color: ${props => props.theme.cor.fundo};
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .header{
        width: 67vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -50px;
        margin-bottom: 50px;

        .filtro{
          label{
            font-size: 1.25em;
            color: ${props => props.theme.cor.corDoIcone};
          }

          input{
            width: 20em;
            background: transparent;
            border: 1px solid ${props => props.theme.cor.corDoIcone};
            min-height: 20px;
            font-size: 1em;
            color: ${props => props.theme.cor.corDoIcone};
            padding-left: 10px;
            margin-left: 10px;
            
            &::placeholder{
              color: ${props => props.theme.cor.corDoIcone};
            }
          }
        }

        button{
          float: right;
          color: black;
          font-size: 1.9em;
          background-color: transparent;
          border: 0;

          svg{
            color: ${props => props.theme.cor.titulo};
          }
        }
      }
    }

    table{
      border-collapse: collapse;
      width: 85%;
      text-align: center;
    }

    thead tr{
      text-transform: uppercase;
      font-size: .9em;
      background: #0075B1;
      color: #fff;
    }

    tr{
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #8B8787;
      border-top: 0;
      height: 56px;
      text-transform: uppercase;
      font-size: .9em;
      
      td{
        width: 150px;
      }
      
      td:nth-child(2){
        width: 450px;
        text-align: start;
      }

      button{
        border: 0;
        font-size: 1.25em;
      }
    }

    tbody {
      height: 350px;
      overflow-y: scroll;
      overflow-x: hidden;
      display: block;
      border: 1px solid #8B8787;
    }
  `}

  @media (max-width: 1024px) and (min-width: 769px) {
    #segura{
      height: 90vh;
      width: 90vw;
    }

    button{
      right: 70px;
      top: 48px;
    }
  }

  @media (max-width: 768px)  {
    #segura{
      height: 90vh;
      width: 90vw;
    }

    button{
      right: 70px;
      top: 48px;
    }

    table{
      tbody {
        width: 74vw;
      }

      thead tr{
        width: 74vw;
      }
    }
  }
`;


  

interface colorConsultores{
  color: string;
}
  
export const Tr = styled.div<colorConsultores>`
  cursor: pointer;
  
  ${(props) => props.color === "ATIVO" &&
    css`
      td:nth-child(3){
        color: ${props => props.theme.cor.titulo};
      }
  `}

  ${(props) => props.color === "INATIVO" && 
    css`
      td:nth-child(3){
        color: ${props => props.theme.cor.inativoStatus}
      }
  `}

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #8B8787;
  border-top: 0;
  height: 56px;
  color: ${props => props.theme.cor.titulo};
  text-transform: uppercase;
  font-size: .9em;

  td{
    width: 150px;
  }
    
  td:nth-child(2){
    width: 450px;
    text-align: start;
  }

  button{
    background: #fff;
    border: 0;
    font-size: 1.25em;
  }
`;

interface Description {
  open: boolean;
}

export const Descricoes = styled.div<Description>`
  width:0;
  right: 100%;
  height: 270px;
  background: transparent;
  position: absolute;
  top: 0;
  z-index: 99999;

  ${(props) => !!props.open ?
    css`
      width: 330px;
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
        height: 215px;
        padding: 10px;
        background: ${props => props.theme.cor.fundoCard};
        border: 1px solid ${props => props.theme.cor.bordaTabela};
        border-top: none;

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