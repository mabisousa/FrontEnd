import { createGlobalStyle } from "styled-components";

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
    background: ${() =>
      localStorage.getItem('tema') === 
      '{"titulo":"escuro","cor":{"fundoEscuro":"#1B2126","fundo":"#1F262B","titulo":"#fff","undeline":"#57B7DC","corDoIcone":"#fff","andamentoStatus":"#695522","concluidoStatus":"#355062","atrasadoStatus":"#502015","fundoCard":"#11181D","secaoTitulo":"#96CBE2","data":"#D2D2D2","bordaPerfil":"#90C0E3","bordaPerfilAfter":"#90C0E3","projetoMenu":"#0B2E4A","aprovacaoMenu":"#0B3A52","consultoresMenu":"#183A4D","listagemMenu":"#0B445A","requisicaoMenu":"#1B5562","thead":"#0B2E4A","bordaTabela":"#fff","inativoStatus":"#C5715F","habilidadeBotao":"#1B5562","botaoReprovar":"#7D7F80","passo":"#C5C3C3","passoAtivo":"#26435C"}}'      
      ? '#1F262B' 
      : '#fff'
    };
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
