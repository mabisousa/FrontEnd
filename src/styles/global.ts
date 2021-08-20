import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #app{
      height: 100%;
      margin: 0;
  }

  *,::before,::after{
    box-sizing: border-box;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  
  #root {
    margin: 0 auto;
  
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration:none;
  }

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
      width: 2px;
      background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
      background: #dad7d7;
  }
`;
