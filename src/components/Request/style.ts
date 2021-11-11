import styled, { css } from 'styled-components';


interface RequestProps {
  send: boolean,
}
export const Background = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999999;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0,0,0,0.7);
  visibility:visible;
`;
export const Container = styled.main<RequestProps>`
  width: 600px;
  height: 400px;
  padding: 1.5%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative; 
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;

    svg {
      height: 30px;
      width: 30px;
      display: block;
      position: absolute;
      left: 7%;
      top: 7%;
      cursor: pointer;
    }
    p {
      font-size: 18px;
    }
    ${props => !props.send ? css`

    textarea {
      width: 100%;
      resize: none;
      height: 200px;
      padding: 10px;
    }
    button {
      border: none;
      color: #fff;
      padding: 2% 5%;
      background-color:  ${props => props.theme.cor.habilidadeBotao};
    }
    ` : css`

    width: 450px;
    height: 250px;

    div {
      display: flex;
      justify-content: space-between;
      width: 70%;
      height: auto;

      button {
      border: none;
      color: #fff;
      padding: 4% 8%;

        :nth-child(1) {
          background-color: ${props => props.theme.cor.botaoReprovar};
        }
        :nth-child(2) {
        background-color:  ${props => props.theme.cor.habilidadeBotao};
        }
      }
      /* :nth-child(2) {
        justify-content: flex-start;
      } */
    }
    
    `}

  @media (max-width: 768px)  {
    width: 450px;
    height: 350px;

    textarea {
      width: 90%;
      resize: none;
      height: 200px;
      padding: 10px;
    }
    
  } 
`;

export const Selecionado = styled.span`
  padding: 10px;
  border: 1px solid black;
  background: #f5f5f5;
  margin: 0 5px;
`;