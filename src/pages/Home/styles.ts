import styled from 'styled-components';

export const Cards = styled.div`
    width: 90%;
    height: 90%;
    margin-left: 89.6px;
    margin-top: 48px;

    @media (max-width: 425px){
        width: 100%;
    }
`;

export const Card = styled.a`
    background-color: #FFFFFF;
    cursor: pointer;
    width: 45%;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
    height: 150px;
    margin: 1rem;
    float: left;

    @media (max-width: 425px){
        width: 100%;
    }
`;

export const BarStatus = styled.div`
    background-color: #EBB93A;
    height: 150px;
    width: 13px;
    box-shadow: 0 5px 5px rgb(0 0 0 / 0.2);
    position: absolute;
`;

export const TitleSection = styled.p`
    width: 200px;
    font-size: 14px;
    color: #0075B1;
    margin-top: 1rem;
    margin-left: 2rem;

    @media (max-width: 1024px) and (min-width: 426px) {
        font-size: 13px;
    }
    
    @media (max-width: 425px){
        font-size: 80%;
    }
`;

export const TitleProject = styled.p`
    width: 500px;
    color: #000000;
    font-size: 18px;
    margin-left: 2rem;

    @media (max-width: 1024px) and (min-width: 769px) {
        font-size: 15px;
    }
    
    @media (max-width: 768px) and (min-width: 426px) {
        font-size: 12px;
    }

    @media (max-width: 425px){
        font-size: 100%;
    }
`;

export const HoldHours = styled.div`
    width:200px;
    height:40px;
    float: left;
    margin-top: 7px;
    margin-left: 2rem;

    @media (max-width: 425px){
        margin-left: 2rem;
        width: 150px;
    }
`;

export const Hours = styled.div`
    width:200px;
    height:20px;
    margin-left: 15%;
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
    font-size: 12px;   
`;

export const Status = styled.div`
    width:130px;
    height:80px;
    float:right;
    margin-right: 32px;
    margin-top: 7px;
    text-align: center;

    p:nth-child(1){
        font-weight: regular;
        font-size: 15px;
    }

    p:nth-child(2){
        font-weight: bold;
        font-size: 17px;
    }

    @media (max-width: 1024px) and (min-width: 769px) {
        margin-right: 5px;
        p:nth-child(1){
            font-weight: regular;
            font-size: 13px;
        }

        p:nth-child(2){
            font-weight: bold;
            font-size: 15px;
        }
    }

    @media (max-width: 768px) and (min-width: 426px) {
        margin-right: 15px;
        p:nth-child(1){
            font-weight: regular;
            font-size: 13px;
        }

        p:nth-child(2){
            font-weight: bold;
            font-size: 15px;
        }
    }

    @media (max-width: 425px){
        margin-right: 5px;
        p:nth-child(1){
            font-weight: regular;
            font-size: 70%;
        }

        p:nth-child(2){
            font-weight: bold;
            font-size: 75%;
        }
    }
   
`;

export const Date = styled.div`
    width:300px;
    height:15px;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    margin-left: 2rem;

    p {
        color: #7E7E7E;
        float: left;
        font-size: 12px;
    }

    @media (max-width: 768px) and (min-width: 426px) {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        p {
            margin-top: -75px;
        }

        p:nth-child(2) {
            margin-top: -150px;
        }
    }
`;

export const Container = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: 9999;
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    
    button {
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
        width: 960px; 
        background: #fff;
        display: flex;
        flex-direction: column;
        padding: 35px;
    }
`;
 
export const TitlePopUp = styled.div`
    width: 80%;
    height: 17%;
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
    width: 100%;
    height: 73%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
export const DetailsPopup = styled.div`
    height: 10%;
    border: 1px solid black;
    width: 100%;
`;
export const InfosGerais = styled.div`
    width: 50%;
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
export const Objetivo = styled.div`
    width: 50%;
    height: 50%;

    display: flex;
    flex-direction: column;

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
 export const Horas = styled.div`
    width:50%;
    height: 50%;

    display: flex;
    flex-direction: column;

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
export const Skills = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        border:1px solid #7e7e7e;

        tr {
            border-bottom:1px solid #7e7e7e;
        }
    }
    td {
        width: 250px;
        padding: 10px;
    }
  }
`;

export const TableConsultor = styled.div`
    width:100%;
    height:100%;
    margin-top: 17px;
 
    table {
        border-collapse: collapse;
        text-align: center;
        width: 90%;

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
            height: 277px;
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