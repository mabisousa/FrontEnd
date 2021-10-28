import styled, {css} from 'styled-components';

interface tableProps{
  color?: string;
}

export const Container = styled.div<tableProps>`
  margin-left: 130px;
  margin-top: 50px;
  margin-bottom: 40px;
  height: 350px;

  table{
    border-collapse: collapse;
    width: 90%;
  }

  thead{
    text-transform: uppercase;
    font-size: .9em;
    background: ${props => props.theme.colors.thead};;
  }

  thead tr{
    color: #fff;
  }

  tbody {
    height: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    display: block;
    border: 1px solid ${props => props.theme.colors.tableBorder};
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
    border-bottom: 1px solid ${props => props.theme.colors.tableBorder};

    td{
      width: 150px;
    }
    
    td:nth-child(2){
      width: 450px;
      text-align: start;
    }
  } 


    @media (max-width: 1024px) and (min-width: 769px) {
      
      tbody {
        height:45vh;
        width: 79vw;
      }

      tr{
          td{
            width: 11vw;
          }
          
          td:nth-child(2){
            width: 34vw;
          }
        }
    }

    @media (max-width: 768px)  {
      tbody {
        height:45vh;
        width: 75vw;
      }

      tr{
          td{
            width: 11vw;
          }
          
          td:nth-child(2){
            width: 31vw;
          }
        }
    }
 
`;

export const Tr = styled.div<tableProps>`

  ${(props) => props.color === "INATIVO" && 
    css`
      td:nth-child(3){
        color: ${props => props.theme.colors.inactiveStatus};
      }
  `}

  border-bottom: 1px solid ${props => props.theme.colors.tableBorder};
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
    color: ${props => props.theme.colors.title};
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