import styled, {css} from 'styled-components';

interface propriedadesTabela{
  color?: string;
}

export const Container = styled.div<propriedadesTabela>`
  margin: 8vh 0 7vh 10vw;
  height: 62vh;

  table{
    border-collapse: collapse;
    width: 81vw;
  }

  thead{
    text-transform: uppercase;
    font-size: .9em;
    background: ${props => props.theme.cor.thead};;
  }

  thead tr{
    color: #fff;
  }

  tbody {
    height: 54vh;
    overflow-y: scroll;
    overflow-x: hidden;
    display: block;
    border: 1px solid ${props => props.theme.cor.bordaTabela};
  }

  tr{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-top: 0;
    height: 9vh;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
    font-size: .9em;
    border-bottom: 1px solid ${props => props.theme.cor.bordaTabela};

    td{
      width: 11vw;
    }
    
    td:nth-child(2){
      width: 33vw;
      text-align: start;
    }
  } 

    @media (max-width: 768px)  {
      table{
        width: 75vw;
        font-size: .9em;
        margin-left: 3vw;
        tbody {
          height:45vh;
          width: 75vw;
        }

        tr{
          td:nth-child(2){
            width: 31vw;
          }
        }
      }
    }
 
`;

export const Tr = styled.div<propriedadesTabela>`

  ${(props) => props.color === "INATIVO" && 
    css`
      td:nth-child(3){
        color: ${props => props.theme.cor.inativoStatus};
      }
  `}

  border-bottom: 1px solid ${props => props.theme.cor.bordaTabela};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top: 0;
  height: 9vh;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  font-size: .9em;

  td{
    width: 11vw;
    color: ${props => props.theme.cor.titulo};
  }
  
  td:nth-child(2){
    width: 31vw;
    text-align: start;
  }  

  button{
    background: transparent;
    border: 0;
    font-size: 1.25em;
  }
`;