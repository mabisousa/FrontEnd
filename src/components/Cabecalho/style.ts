import styled, { css } from "styled-components";

interface dropdownProps {
  mostrarDropdown: boolean;
  mostrarIdiomas: boolean;
  mostrarFonte: boolean;
}

export const Container = styled.div<dropdownProps>`
  width: 100vw;
  height: 12vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border-bottom: 2px solid #90C0E3;  
  background: ${props => props.theme.cor.fundoEscuro};

  #nome{
    width:16vw;
    display: flex;
    align-items: center;
    
    img{
      margin:0 2vw;
      height: 5vw;
      cursor: pointer;
    }
    
    p {
      font-weight: bold;
      font-size: 1em;
      cursor: pointer;
      color: ${props => props.theme.cor.titulo};
    }
  }

  #sair{
    width: 5vw;
    height: 2vw;
    margin: 1vh 1.5vw 1vh .5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  
    svg{
      height: 3vh;
      width: 1.5vw;
      cursor: pointer;
      margin-right: .5vw;
      margin-top: 1.5vh;
      color: ${props => props.theme.cor.corDoIcone};
    }

    p {
      font-size: .9em;
      width: 4vw;
      cursor: pointer;
      text-align: center;
      margin-top: 1vh;
      color: ${props => props.theme.cor.titulo};
      border-left: 1.5px solid ${props => props.theme.cor.titulo};
    }
  }

  #dropdown{
    position: absolute;
    right: 5vw;
    top: 5vh;
    cursor: pointer;
    min-width: 13vw;
    height: auto;
    border: solid 1px ${props => props.theme.cor.corDoIcone};
    border-bottom: none;
    background-color: ${props => props.theme.cor.fundo}; 

    ${(props) => props.mostrarDropdown ?
      css`
        display: none;
      `: css`
        display: block;
      `}

    svg{
      height: 4vh;
      width: 2vw;
      margin: .6vh .6vw .6vh .6vw;
    }

    button{ 
      width: 13vw;
      border: none;
      display: flex;
      min-height: 5vh;
      align-items: center;
      background-color: transparent;
      color: ${props => props.theme.cor.corDoIcone};
      border-bottom: solid 1px ${props => props.theme.cor.corDoIcone};
      font-size: 1em;

        p{
          min-height: 3vh;
          font-size: 1em;
        }

        span{
          min-height: 20px;
          font-size: .9em;
        }
    }
      
    #idiomas{
      height: 15vh;

      ${(props) => props.mostrarIdiomas ?
      css`
        display: none;
      `: css`
        display: block;
      `}  

      img{
        height: 4vh;
        width: 1.8vw;
        margin-left: 1vw;
        margin-right: .8vw;
      }  
    }

    #fontes{
      height: 16vh;

      svg{
        height: 3vh;
        width: 1.8vw;
        margin-left: 1vw;
        margin-right: .8vw;
      }

      .pequeno{
        height: 2vh;
        width: 1.8vw;
      }

      .grande{
        height: 3.7vh;
        width: 2vw;
      }
      
      ${(props) => props.mostrarFonte ?
      css`
        display: none;
      `: css`
        display: block;
      `}
    }   
  }
`;