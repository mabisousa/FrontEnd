import styled, {css} from "styled-components";

interface notificationProps{
  darkMode: boolean;
}

export const Container = styled.div<notificationProps>`

  ${(props) => props.darkMode ?
    css`
      background: #fff; 
      box-shadow: 0px 5px 7px 0px #e2e2e2;
    `: css`
      background: #11181D;
      box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.25);
    `}

  min-height: 50px;
  max-width: 100%;
  margin:5px 0px;
 
`;