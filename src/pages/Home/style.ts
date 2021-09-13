import styled, { css } from 'styled-components';

export const Filters = styled.div`
    width: 95%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 7rem 0rem 0rem 4rem;

        div{
            width: 90%;
            height: 60px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        
        #img{
            float: right;
        }

        button{
            border: none;
            background: transparent;
        }
  
`;

export const Filter= styled.div`
    width: 90%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    margin-bottom: 3rem;

        p{
            color: #7E7E7E;
            font-size: 20px;
            text-align: center;
        }

        div{
            width: 150px;
            height: 20px;
            border: solid 1px  #7E7E7E;
            color:#7E7E7E;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
            display: block;

            span{
                font-size: 14px;
            }
        }


`;
export const Title = styled.h1`
    font-weight:normal;
    font-size: 20px;
    text-decoration: underline #0075B1;
    margin-left: 50px;
    width: 300px;
`;

export const Form = styled.form`
    width: 280px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    label {
        color: #7E7E7E;
        font-size: 20px;
        text-align: center;
    }
    
`;

export const Cards = styled.div`
    width: 90%;
    height: 90%;
    margin-left: 89.6px;
    margin-top: 48px;

    @media (max-width: 425px){
        width: 100%;
    }
`;

interface cardProps {
    color?: string,
    Show: boolean;
}

export const Card = styled.a<cardProps>`
    background-color: #FFFFFF;
    cursor: pointer;

    box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
    margin: 1rem;
    float: left;

    ${(props) => props.color && css`
        border-left: 15px solid ${props.color};
    `}
    
    ${(props) => props.Show ? 
        css` 
            width:45%; 
            height: 150px;

        `: css`
            width: 30%;
            height : 200px;

            @media (max-width: 1024px) {
                margin: .6rem;
            }
            
            @media (max-width: 768px){
                width: 40%;
                margin: 1rem 1.3rem 1rem 1.6rem;
            }
    `}

    @media (max-width: 425px){
        width: 90%;
    }

    @media (max-width: 768px){
        width: 43%;
        margin: 1rem 1.6rem 1rem 1rem;
    }
`;

export const TitleSection = styled.p<cardProps>`
    width: 200px;
    color: #0075B1;
    margin-top: 1rem;
    margin-left: 2rem;

    @media (max-width: 1024px) and (min-width: 426px) {
        font-size: 13px;
    }
    
    @media (max-width: 425px){
        font-size: 80%;
    }

    ${(props) => props.Show ? 
        css` 
            font-size: 14px;
        `: css`
            font-size: 12px;

          
    `}
`;

export const TitleProject = styled.p<cardProps>`
    color: #000000;
    margin-left: 2rem;

    @media (max-width: 1024px) and (min-width: 769px) {
        font-size: 15px;
        width: 350px;
    }
    
    @media (max-width: 768px) and (min-width: 426px) {
        font-size: 12px;
        width: 245px; 
    }

    @media (max-width: 425px){
        font-size: 100%;
    }

    ${(props) => props.Show ? 
        css` 
            width: 500px;
            font-size: 18px;
            margin-top: 0;
        `: css`
            width: 315px;
            font-size: 16px;
            margin-top: 1rem;   

            @media (max-width: 768px){
                width: 200px;
                margin-top: 5px;
            }
    `}
    
`;

export const HoldHours = styled.div<cardProps>`
    width:200px;
    height:40px;
    float: left;

    @media (max-width: 425px){
        margin-left: 2rem;
        width: 150px;
    }

    @media (max-width: 768px){
        margin-left: 1rem;
        width: 130px;
    }

    ${(props) => props.Show ? 
        css` 
            margin-left: 2rem;
            margin-top: 7px;

        `: css`
            margin-left: 7px;
            margin-top: 1rem; 
            
            @media (max-width: 1024px){
            margin-left: 1rem;
            width: 100px;
            }

            @media (max-width: 768px){
            width: 140px;
            }
    `}
`;

export const Hours = styled.div<cardProps>`
    height:20px;
    margin-left: 15%;
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
    
    ${(props) => props.Show ? 
        css` 
            width:200px;
            font-size: 12px;
        `: css`
            width:150px;
            font-size:11px;   

            @media (max-width: 1024px){
                width: 100px;
                    p{
                        font-size: 12px;
                    } 
            }
    `}

    @media (max-width: 768px){
        margin-left: 1rem;
        width: 100px;
            p{
                font-size: 12px;
            } 
    }

    @media (max-width: 1024px){
        margin-left: 1rem;
        width: 150px;
    }
`;

export const Status = styled.div<cardProps>`
    width:120px;
    float:right;
    text-align: center;

    p:nth-child(1){
        font-weight: regular;
        font-size: 15px;
    }

    p:nth-child(2){
        font-weight: bold;
        font-size: 17px;
    }

    ${(props) => props.Show ? 
        css` 
            margin-top: 7px;
            margin-right: 32px;
            height:80px;

            p:nth-child(1){
                font-size: 15px;
            }

            p:nth-child(2){
                font-size: 17px;
            }

        `: css`
            margin-top: 17px;
            margin-right: 16px;
            height:60px;
            
            p:nth-child(1){
                font-size: 14px;
            }

            p:nth-child(2){
                font-size: 16px;
            }


            @media (max-width: 768px) {
                margin: 5px 0 5px 0;
            }

    `}

    @media (max-width: 1024px) and (min-width: 769px) {
        margin-right: 25px;
        height: 45px;
        
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
        height: 40px;

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

export const Date = styled.div<cardProps>`
    width:300px;
    height:15px;
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;

    p {
        color: #7E7E7E;
        float: left;
        font-size: 12px;
    }

    ${(props) => props.Show ? 
        css` 
            margin-top: 4rem;
        `: css`
            margin-top: 10px;

            @media (max-width: 1024px){
            width: 220px;
            }

    `}

    @media (max-width: 768px) and (min-width: 426px) {
        width: 230px;
        
    }
`;

interface PopUp{
    Open: boolean;
    show: boolean;
}

export const Container = styled.div<PopUp>`
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

    ${(props) => !props.show && 
    css`
      div {
          visibility: hidden;
      }
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
`;

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