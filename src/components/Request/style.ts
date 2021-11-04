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
    top: 10%;
    cursor: pointer;
  }
    p {
      font-size: 18px;
    }
    ${props => !props.send ? css`
    
    textarea {
      width: 100%;
      height: 200px;
    }
    button {
      border: none;
      color: #fff;
      padding: 2% 5%;
      background-color: blue;
    }
    ` : css`

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
          background-color: red;
        }
        :nth-child(2) {
        background-color: blue;
        }
      }
    }
    `}
   
`;