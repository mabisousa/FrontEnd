import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*,::before,::after{
  box-sizing: border-box;
}
  
body {
  -webkit-font-smoothing: antialiased;
  font-size: ${() =>
      !localStorage.getItem("Fontsize") ? '16px ' : localStorage.getItem("Fontsize")
    };
    font-family: Roboto, sans-serif;
}
  
h1, h2, h3, h4, h5, h6, p {
  font: 16px Roboto, sans-serif;
}

input, button {
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
