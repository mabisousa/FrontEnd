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

  color: ${props => props.theme.colors.title};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  
  button:nth-child(1) {
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 1.9em;
    height: 30px;
    width: 30px;
    border: 0;
    background: none;
  }

  #hold{
    position: relative;
    height: 560px;
    background: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    padding: 35px;

    button{
      svg{
        color: ${props => props.theme.colors.title}
      }
    }
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    #hold{
      height: 490px;
    }
  }
`;

export const TitlePopUp = styled.div`
  width: 80%;
  height: 17%;
  padding: 10px;
  font-weight: 500;

  h2 {
    color: ${props => props.theme.colors.titleSection};
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

export const DetailsPopup = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 62.5vw;

  ${(props) => props.color === "ANDAMENTO" &&
    css`
      h1{
        color: ${props => props.theme.colors.progresStatus};
      }
    `}

  ${(props) => props.color === "CONCLUÍDO" && 
    css`
      h1{
        color: ${props => props.theme.colors.concludedStatus};
      }
    `}

  ${(props) => props.color === "ATRASADO" &&
    css`
      h1{
        color: ${props => props.theme.colors.lateStatus};
      }
    `}

  h1 {
    font-size: 1.5em;
    font-weight: 700;
  }
`;

interface ContainerProps {
  open: boolean;
}

export const InfosGerais = styled.div<ContainerProps>`

  ${(props) => props.open ? 
    css`
      width: 35%;
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
      width: 35%;
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
      width: 90%;
      height: 70%;
      align-self: center;
      overflow-y: scroll;
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    height: 45%;
  }
`;

 export const Horas = styled.div<ContainerProps>`

  ${(props) => props.open ? 
    css`
      width: 40%;
      transition: 1s;
    `: css`
      width: 32vw;
      transition: 0s;
    `}

  height: 28.5vh;
  display: flex;
  flex-direction: column;
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
        color: ${props => props.theme.colors.date};
      }
    }
  }
 `;

export const Skills = styled.div<ContainerProps>`
  ${(props) => props.open ? 
    css`
      width: 40%;
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
    background: ${props => props.theme.colors.skillsButton};
  }
`;

export const Table = styled.div`
  width: 28.1vw;
  height: 19vh;
  
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;

    thead {
      display: inline-flex;
      background: ${props => props.theme.colors.approvalMenu};
      color: #fff;
      width: 100%;
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
        background: ${props => props.theme.colors.approvalMenu};
        height: 40px;
        display: inline-flex;
        width: 100%;
        text-transform: uppercase;
        font-size: .9em;
        margin-bottom: 15px;

        tr {
          font-size: .9em;
          height: 40px;
          width:100%;
          padding:12px;
        }

        td:nth-child(1) {
          color:#fff;
          width: 35%;
        }
        
        td:nth-child(2) {
          color:#fff;
          max-width: 65%;
        }
      }
        
      tbody {
        height: 282px;
        overflow-y: auto;
        display: block;
        border: 1px solid #e2e2e280;

        tr {
          font-size: .9em;
          width: 100%;
          border: 1px solid #e2e2e280;
        }

        td:nth-child(1) {
          padding: 15px;
          width: 35%;
          border-right: 1px solid #e2e2e280;
        }
        
        td:nth-child(2) {
          max-width: 65%;
          border-right: 1px solid #e2e2e280;
        }
      }
    }
`;