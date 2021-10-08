import styled, {css} from 'styled-components';

export const Container = styled.div`
    margin-left: 130px;
    margin-top: 50px;
    margin-bottom: 40px;
    height: 350px;

    table{
      border-collapse: collapse;
      width: 90%;
    }

    thead{
      background: #0075B1;
      text-transform: uppercase;
      font-size: .9em;
    }

    thead tr{
      color: #fff;
    }

    tbody {
      height: 350px;
      overflow-y: scroll;
      overflow-x: hidden;
      display: block;
      border: 1px solid #8B8787;
    }

    tr{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-bottom: 1px solid #8B8787;
      border-top: 0;
      height: 56px;
      color: rgba(0, 0, 0, 0.87);
      text-transform: uppercase;
      font-size: .9em;

      td{
        width: 150px;
      }
      
      td:nth-child(2){
        width: 450px;
        text-align: start;
      }
    }    
`;

interface colorConsultores{
  color: string;
}

export const Tr = styled.div<colorConsultores>`
    ${(props) =>
    props.color === "ATIVO" &&
    css`
      td:nth-child(3){
        color: #000;
      }
     
    `}

    ${(props) =>
    props.color === "INATIVO" && 
    css`
      td:nth-child(3){
        color: #AC341A;
      }
    `}

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #8B8787;
    border-top: 0;
    height: 56px;
    color: rgba(0, 0, 0, 0.87);
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