import styled, { css } from 'styled-components';

interface propriedadesDropdown {
  mostrarDropdown: boolean;
  alterarSeta: boolean;
}

export const Container = styled.div<propriedadesDropdown>`
  #dropdown{
    width: 150px;
    height: 20px;
    border: solid 1px ${props => props.theme.cor.corDoIcone};
    color: ${props => props.theme.cor.corDoIcone};
    font-size: .9em;
    text-align: center;
    cursor: pointer;
    display: block;

    span{
      font-size: .91em;
    }

    div{
      width: 150px;
      position:relative;
      left: -1px;
      top: 2px;
      border: solid 1px  ${props => props.theme.cor.corDoIcone};
      color: ${props => props.theme.cor.corDoIcone};
      background: transparent;
      overflow-y: scroll;
      height: 50px;


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
        height: 20px;
        padding-top:1%;
        width: 100%;
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
      width: 105px;

      div{
        width: 105px;
      }
      span{
        font-size: .80em;
      }
    }
    
  }

  @media (max-width: 768px)  {
    #dropdown{
      width: 100px;

      div{
        width:100px;
      }
      span{
        font-size: .75em;
      }
    }
  }
`;