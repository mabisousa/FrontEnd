import styled, { css } from 'styled-components';

interface propriedadesDropdown {
  mostrarDropdown: boolean;
  alterarSeta: boolean;
}

export const Container = styled.div<propriedadesDropdown>`
  #dropdown{
    width: 10vw;
    height: 3vh;
    border: solid 1px ${props => props.theme.cor.corDoIcone};
    color: ${props => props.theme.cor.corDoIcone};
    font-size: .9em;
    text-align: center;
    cursor: pointer;
    display: block;

    span{
      font-size: .91em;
      margin-left: 1.5vw;
    }

    div{
      width: 10vw;
      position:relative;
      left: -0.1vw;
      top: 0.2vh;
      border: solid 1px  ${props => props.theme.cor.corDoIcone};
      color: ${props => props.theme.cor.corDoIcone};
      background: transparent;
      overflow-y: scroll;
      height: 8vh;


      ${(props) => props.mostrarDropdown ?
        css`
          display: none;
        `: css`
          display: block;
        `}

      button{
        font-size: .91em;
        border-bottom: solid 1px  ${props => props.theme.cor.corDoIcone};
        color: ${props => props.theme.cor.corDoIcone};
        height: 3vh;
        width: 9.5vw;
      }  
    }
    
    #setaBaixo{
      float: right;
      display: block;
      height: 1.06em;
      width: 1.06em;
      color: ${props => props.theme.cor.corDoIcone};

      ${(props) => props.alterarSeta ?
        css`
          display: block;
        `: css`
          display: none;
        `}
    }

    #setaEsquerda{
      float: right;
      display: none;
      color: ${props => props.theme.cor.corDoIcone};

      ${(props) => props.alterarSeta ?
        css`
          display: none;
        `: css`
          display: block;
        `}
    }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    #dropdown{
      div{
        top: 0vh;
      }
    }
  }

  @media (max-width: 768px)  {
    #dropdown{
      width: 16vw;
      div{
        width: 16vw;
        top: 0vh;
        left: -0.2vw;
        
        button{
          width: 15vw;
        }
      }
      span, p{
        font-size: .75em;
      }
    }
  }
`;