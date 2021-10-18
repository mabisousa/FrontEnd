import styled, {css} from 'styled-components';

interface tableProps{
  color?: string;
  darkMode?: boolean;
}

export const Container = styled.div<tableProps>`
  margin-left: 130px;
  margin-top: 50px;
  margin-bottom: 40px;
  height: 350px;

  ${(props) => props.darkMode ?
    css`
      thead{
        background: #0075B1;
      }
      tbody{
        border: 1px solid #8B8787;
      }
      tr{
        border-bottom: 1px solid #8B8787;
      }
    `: css`
      thead{
        background: #0B2E4A;
      }
      tbody{
        border: 1px solid #fff;
      }
      tr{
        border-bottom: 1px solid #fff;
      }
    `}

  table{
    border-collapse: collapse;
    width: 90%;
  }

  thead{
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
  }

  tr{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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

export const Tr = styled.div<tableProps>`

  ${(props) => props.color === "INATIVO" && 
    css`
      td:nth-child(3){
        color: #AC341A;
      }
  `}

  ${(props) => props.darkMode ?
    css`
      border-bottom: 1px solid #8B8787;
      td{
        color: #000;
      }
    `: css`
      border-bottom: 1px solid #fff;
      td{
        color: #fff;
      }
    `}

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
    background: transparent;
    border: 0;
    font-size: 1.25em;
  }
`;