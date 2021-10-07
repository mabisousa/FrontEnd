import styled, { css } from "styled-components";

interface PopUp{
    Open: boolean;
    show: boolean;
}
export const ContainerPopup = styled.div<PopUp>`
    ${(props) => props.Open ? 
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
        font-size: 30px;
        height: 30px;
        width: 30px;
        border: 0;
        background: none;
    }
    #hold{
        position: relative;
        height: 560px;
        background: #fff;
        display: flex;
        flex-direction: column;
        padding: 35px;
    }
`
export const TitlePopUp = styled.div`
    width: 80%;
    height: 17%;
    padding: 10px;
    font-weight: 500;
    color: #023A67;

    h2 {
        color: #0075B1;
        font-size: 18px;
    }
    h1 {
        color: #000;
        font-size: 22px;
        font-weight: bold;
    }
`;
export const InfosPopup = styled.div`

    height: 75%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
export const DetailsPopup = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;

    h1 {
        color: #EBB93A;
        font-size: 24px;
        font-weight: 700;
    }
`;

interface ContainerProps {
    Open: boolean;
}

export const InfosGerais = styled.div<ContainerProps>`

    ${(props) => props.Open ? 
        css`
        width: 35%;
        transition: 1s;

        `: css`
        width: 50%;
        transition: 0s;
        `}

    height: 40%;

    h1 {
        color: #023A67;
    }
    p {
      font-size: 12px;
      margin: 5px;
    }
    div:nth-child(2) {
        padding: 20px;
    }

`;
export const Objetivo = styled.div<ContainerProps>`
    ${(props) => props.Open ? 
        css`
        width: 35%;
        transition: 1s;
        `: css`
        width: 50%;
        transition: 0s;
        `}
    height: 50%;

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

`;
 export const Horas = styled.div<ContainerProps>`
    ${(props) => props.Open ? 
        css`
        width: 40%;
        transition: 1s;
        `: css`
        width: 50%;
        transition: 0s;
        `}
    height: 50%;

    display: flex;
    flex-direction: column;

    h1 {
        color: #023A67;
    }
 `;
 export const HorasApontadas = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    div:nth-child(2) {
        height: 50%;
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p {
            font-size: 12px;
            display: flex;
            justify-content: space-between;

            span {
                color: #7e7e7e;
            }
        }
    }
 `;
export const Skills = styled.div<ContainerProps>`
  ${(props) => props.Open ? 
        css`
        width: 40%;
        transition: 1s;
        `: css`
        width: 50%;
        transition: 0s;
        `}

    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button:nth-child(2) {
            border: 0;
            width: 85%;
            height: 40px;
            font-size: 14px;
            color: #fff;
            background: #28B9DA;
        }
`;
export const Table = styled.div`
  width: 85%;
  height: 65%;
  
  table {
      width: 100%;
      border-collapse: collapse;
      text-align: center;

      thead {
          display: inline-flex;
          background: #0075B1;
          color: #fff;
          width: 100%;
          height: 40px;
          font-size: 14px;
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

    ${(props) => props.Open ? 
        css`
        table {
        visibility: visible;
        transition-delay: 1s;
        }
        width: 25%;

        `: css`
        table {
        visibility: hidden;
        transition-delay: 0s;
        }
        width: 0%;
        `}

    height: 100%;
    
    
    table {
        border-collapse: collapse;
        text-align: center;
        width: 100%;
        thead {
            background: #0075B1;
            height: 40px;
            display: inline-flex;
            width: 100%;
            text-transform: uppercase;
            font-size: 14px;
            margin-bottom: 15px;
            tr {
                font-size: 14px;
                height: 40px;
                width:100%;
                padding:12px;
                color: rgba(0, 0, 0, 0.87);
            }
            td {
                color:#fff;
                width: 20%;
            }
        }
        
        tbody {
            height: 288px;
            overflow-y: auto;
            display: block;
            border: 1px solid #e2e2e280;
            tr {
                font-size: 14px;
                width: 100%;
                color: rgba(0, 0, 0, 0.87);
                border: 1px solid #e2e2e280;
            }
            td:nth-child(1) {
                padding: 15px;
                width: 20%;
                border-right: 1px solid #e2e2e280;
            }
            td:nth-child(2) {
                max-width: 70%;
                border-right: 1px solid #e2e2e280;
            }
        }
    }
`;
