import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width:100%;
  height:75vh;
  padding: 1% 8% 1% 8%;
  color: ${props => props.theme.cor.titulo};

  h1 {
    font-size: 1em;
    font-weight:500;
    margin:10px 0;
  }

  #finalizar {
    height: 50px;
    padding: 10px;
    color: #fff;
    background: ${props => props.theme.cor.habilidadeBotao};
    border: none;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    h1 {
      font-size: 0.9em;
    }     
  }
`;

export const Infos = styled.div`
  height: 40vh;
  width: 30vw;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;

    form {
        margin-top: 3px;
        height: 100%;
        display: flex;
        flex-direction: column;

        .information {
            margin: 3% 0;
            width: 100%;
            height: 100%;
           
            p {
                font-size: 0.75em;
                width: auto;
            }
            .holding {
                display: flex;
                align-items: center;
                margin-bottom: 3%;
                
                div:nth-child(1) {
                    width: 25%;
                    margin-right: 5%;
                }
                div:nth-child(2) {
                    width: 70%;
                }
            }
            

            @media (max-width: 1024px) and (min-width: 769px) {
              p{
                font-size: 0.65em;
                width: 80px;
              }
              .holding {
                div:nth-child(1) {
                    width: 33%;
                    margin-right: 5%;
                }
              }
            }

            @media (max-width: 768px)  {
              p{
                font-size: 0.65em;
              }
              .holding {
                div:nth-child(1) {
                    width: 43%;
                    margin-right: 5%;
                }
              }
            }

            .holding:nth-child(2) {
                display: flex;
                justify-content: space-between;
                
                p:nth-child(1) {
                    width: 40px;
                }
                div {
                    width: auto;
                }
            }
        }
    }  
`;

export const Count = styled.div`
    height: 40vh;
    width: 27vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transition: 1s;

  div {
    .hold {
      display: flex;
      flex-direction: row;
      align-items:center;
      margin:10px 0;

      .numbers {
        margin: 0 20px 0px 0px;
        width: 40px;
        height: 40px;
        border: 1px solid #8B8787;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        font-size: .9em;
      }
    }

    .hold:nth-child(1) {
      .numbers {
        p {
          font-size: 1.12em;
          color: #7E7E7E90;
        }
      }
    }

    .hold:nth-child(2) {
      .numbers {
        p {
          font-size: 1.12em;
          color: #13B77C;
        }
      }
    }

    .hold:nth-child(3) {
      .numbers {
        p {
          font-size: 1.2em;
          color: #AC341A;
        }
      }
    }
  }
  
  button {
    border: 0;
    width: 80%;
    height: 50px;
    font-size: .9em;
    color: #fff;
    background: ${props => props.theme.cor.habilidadeBotao};
    transition: 1s;
    position: relative;
  }
`;

export const Info = styled.div`
  height: 50px;
  max-width: 250px;
  border: 1px solid #a2a2a2;
  display: flex;
  align-items: center;
  padding: 5px;
  color: #a2a2a2;

  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 0.9em;
  }

  @media (max-width: 768px)  {
    font-size: .8em;
  }
`;

export const Apontamentos = styled.div`
  width: 22vw;
  height: 300px;
  position: relative;

  table{
    border-collapse: collapse;
    width: 100%;
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
      height: 300px;
      overflow-y: scroll;
      overflow-x: hidden;
      display: block;
      border: 1px solid #8B8787;

      span {
          position: relative;
          top: 120px;
          left: 40px;
      }
    }

    tr{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-bottom: 1px solid #8B8787;
      height: 56px;
    }

    td{
      display: flex;
      justify-content: space-evenly;
      width: 60px;
    }
      
    td:nth-child(1){
      width: 40px;
    }
  }
`;

export const Title = styled.h1`
  font-weight:normal;
  font-size: 1.25em;
  text-decoration: underline ${props => props.theme.cor.undeline};
  height: 60px;
  display: flex;
  align-items: center;
  margin: 6rem 0rem 0rem 7rem;
  color: ${props => props.theme.cor.titulo};
`;

export const ProgressBar = styled.div`
  height:120px;
  width:55vw;
  
  .headers {
    height: 50px;
    display: flex;
    justify-content: space-between;
    text-align: center; 
    padding: 0px 11%;

    p {
      width:100px;
      height: 50px;
      font-weight: bold;
      color: #00579D;
    }

    @media (max-width: 1024px) and (min-width: 769px) {
      p {
        font-size: 0.9em;
      }     
    }
  }

  .steps {
    position: relative;
    display:flex;
    justify-content: space-evenly;
    margin-top: 2px;
    color: #fff; 
  }
`;

interface StepActive {
  isActive: boolean;
}

export const Step = styled.div<StepActive>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1.5s;

  &::before {
    z-index: -2;
    content: ' ';
    position: absolute;
    top: 45%;
    width:25%;
    height: 5px;
    background: ${props => props.theme.cor.passo};
  }

  img {
    height: 20px;
    width: 20px;
  }

  ${(props) => props.isActive ?
    css`
      background: ${props => props.theme.cor.passoAtivo};
      transition: 1s;

      &::before {
        z-index: -2;
        content: ' ';
        position: absolute;
        top: 45%;
        width:25%;
        height: 5px;
        background: ${props => props.theme.cor.passoAtivo};
        transition: 1s;
      }
  `:
    css`
      background: ${props => props.theme.cor.passo};
  
      &::before {
        z-index: -2;
        content: ' ';
        position: absolute;
        top: 45%;
        width:25%;
        height: 5px;
        background: ${props => props.theme.cor.passo};
      }
  `}
`;

interface PopUp {
  show: boolean;
}
    
export const Consultores = styled.div<PopUp>`
    
  ${(props) => !!props.show && css`
   
    transition: 200ms ease-in-out;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    color: ${props => props.theme.cor.titulo};
    
    #hold{
        height: 600px;
        width: 75%;
        background-color: ${props => props.theme.cor.fundo};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button{
        color: ${props => props.theme.cor.titulo};
        font-size: 1.9em;
        background-color: transparent;
        border: 0;
        position: absolute;
        right: 200px;
        bottom: 567px;
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
    `
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
interface Request {
    request: boolean;
  }
export const Requisicao = styled.div<Request>`
  width: 10vw;  
  height: 20vh;
  position: absolute;
  right: 0vw;
  top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  button {
        width: 110px;
        height: 40px;
        background-color: #a10e03;
        display: flex;
        align-items: center;
        justify-content: center;
    }

  ${props => !!props.request ? 
  css` visibility: visible;  ` 
  :
   css`
    visibility: hidden;
  `}
`;

interface Description {
  open: boolean;
}

export const Descriptions = styled.div<Description>`
  width:0;
  right: 100%;
  height: 270px;
  background: transparent;
  position: absolute;
  top: 0;

  ${(props) => !!props.open ?
    css`
      width: 330px;
      visibility: visible;
      background: #fff;
      border-left: 1px solid #8B8787;
      border-top: 1px solid #8B8787;
      border-bottom: 1px solid #8B8787;
      transition: 1.5s;

      header {
        width: 100%;
        height: 55px;
        border-bottom: 1px solid #8B8787;
        padding:15px 0px 15px 15px;
        display: flex;
        align-items: center;
        font-size: 1em;

        p {
          transition: 0.5s;
          transition-delay: 1.5s;
        }
        
      }

      div {
        width: 100%;
        height: 100%;
        padding: 10px;

        p {
          transition: 0.5s;
          transition-delay: 1.5s;
        }
      }
   
    ` : 
    css`
      visibility: hidden;
      width: 0px;

      header p, span{
        display: none;
      }
      div {
        display: none;
      }
    `}
`;