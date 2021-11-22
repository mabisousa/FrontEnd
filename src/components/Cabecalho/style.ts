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
    width:220px;
    display: flex;
    align-items: center;
    
    img{
      margin:0 30px;
      height: 70px;
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
    width: 60px;
    height: 30px;
    margin: 5px 20px 5px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  
    svg{
      height: 20px;
      width: 20px;
      cursor: pointer;
      margin-right: 7px;
      margin-top: 10px;
      color: ${props => props.theme.cor.corDoIcone};
    }

    p {
      font-size: .9em;
      width: 40px;
      cursor: pointer;
      text-align: center;
      margin-top: 7px;
      color: ${props => props.theme.cor.titulo};
      border-left: 1.5px solid ${props => props.theme.cor.titulo};
    }
  }

  #dropdown{
    position: absolute;
    right: 62px;
    top: 35px;
    cursor: pointer;
    min-width: 180px;
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
      height: 27px;
      width: 27px;
      margin: 4px 8px 4px 8px;
    }

    button{ 
      width: 100%;
      border: none;
      display: flex;
      min-height: 35px;
      align-items: center;
      background-color: transparent;
      color: ${props => props.theme.cor.corDoIcone};
      border-bottom: solid 1px ${props => props.theme.cor.corDoIcone};
      font-size: 1em;

        p{
          min-height: 20px;
          font-size: 1em;
        }

        img{
          height: 30px;
          width: 30px;
          margin-left: 8px;
          margin-right: 8px;
        }

        span{
          min-height: 20px;
          font-size: .9em;
        }
    }
      
    #idiomas{
      height: 105px;

      ${(props) => props.mostrarIdiomas ?
      css`
        display: none;
      `: css`
        display: block;
      `}  

      img{
        height: 25px;
        width: 25px;
        cursor: pointer;
        margin-left: 16px;
        margin-right: 8px;
      }  
    }

    #fontes{
      min-height: 70px;

      svg{
        height: 25px;
        width: 25px;
        cursor: pointer;
        margin-left: 16px;
        margin-right: 8px;
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