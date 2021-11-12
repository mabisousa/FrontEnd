import styled, { css } from "styled-components";
import { animated } from "react-spring";

interface ToastProps {
  tipo?: "sucesso" | "erro" | "info";
  descricao: boolean;
}

const toastTypeVariantions = {
  sucesso: css`
    background: ${() =>
      localStorage.getItem('tema') === 
      '{"titulo":"escuro","cor":{"fundo":"#1F262B","fundoEscuro":"#1B2126","titulo":"#fff","undeline":"#57B7DC","corDoIcone":"#fff","andamentoStatus":"#695522","concluidoStatus":"#355062","atrasadoStatus":"#502015","fundoCard":"#11181D","secaoTitulo":"#96CBE2","data":"#D2D2D2","bordaPerfil":"#90C0E3","bordaPerfilAfter":"#90C0E3","projetoMenu":"#0B2E4A","aprovacaoMenu":"#0B3A52","consultoresMenu":"#183A4D","thead":"#0B2E4A","bordaTabela":"#fff","inativoStatus":"#C5715F","habilidadeBotao":"#1B5562","botaoReprovar":"#7D7F80","passo":"#C5C3C3","passoAtivo":"#26435C"}}' 
      ? '#1F262B' 
      : '#fff'
    };
    color: #2e656a;
    border: 1px solid  #2e656a;
    box-shadow: 0 0 50px 10px #00000020;
  `,
  info: css`
    background: ${() =>
      localStorage.getItem('tema') === 
      '{"titulo":"escuro","cor":{"fundo":"#1F262B","fundoEscuro":"#1B2126","titulo":"#fff","undeline":"#57B7DC","corDoIcone":"#fff","andamentoStatus":"#695522","concluidoStatus":"#355062","atrasadoStatus":"#502015","fundoCard":"#11181D","secaoTitulo":"#96CBE2","data":"#D2D2D2","bordaPerfil":"#90C0E3","bordaPerfilAfter":"#90C0E3","projetoMenu":"#0B2E4A","aprovacaoMenu":"#0B3A52","consultoresMenu":"#183A4D","thead":"#0B2E4A","bordaTabela":"#fff","inativoStatus":"#C5715F","habilidadeBotao":"#1B5562","botaoReprovar":"#7D7F80","passo":"#C5C3C3","passoAtivo":"#26435C"}}' 
      ? '#1F262B' 
      : '#fff'
    };
    color: #3172b7;
    border: 1px solid  #3172b7;
    box-shadow: 0 0 50px 10px #00000020;
  `,
  erro: css`
    background: ${() =>
      localStorage.getItem('tema') === 
      '{"titulo":"escuro","cor":{"fundo":"#1F262B","fundoEscuro":"#1B2126","titulo":"#fff","undeline":"#57B7DC","corDoIcone":"#fff","andamentoStatus":"#695522","concluidoStatus":"#355062","atrasadoStatus":"#502015","fundoCard":"#11181D","secaoTitulo":"#96CBE2","data":"#D2D2D2","bordaPerfil":"#90C0E3","bordaPerfilAfter":"#90C0E3","projetoMenu":"#0B2E4A","aprovacaoMenu":"#0B3A52","consultoresMenu":"#183A4D","thead":"#0B2E4A","bordaTabela":"#fff","inativoStatus":"#C5715F","habilidadeBotao":"#1B5562","botaoReprovar":"#7D7F80","passo":"#C5C3C3","passoAtivo":"#26435C"}}' 
      ? '#1F262B' 
      : '#fff'
    };
    color: #c53030;
    border: 1px solid  #c53030;
    box-shadow: 0 0 50px 10px #00000020;
  `
};

export const Container = styled(animated.div)<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0 0 0 0.2);
  background: #fddede;
  color: #f53030;
  display: flex;
  z-index: 9999999;

  & + div{
    margin-top: 8px;
  }

  ${(props) => toastTypeVariantions[props.tipo || 'info']}

  > svg {
    margin-top: 4px 12px 0 0;
  }

  div{
    flex: 1;
    margin-left: 10px;

    p{
      margin-top: 4px;
      font-size: .9em;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button{
    position: absolute;
    right: 16px;
    top: 16px;
    opacity: 0.6;
    background: transparent;
    border: 0;
    color: inherit;
  }

  ${props => !props.descricao && css`
    align-items: center;   

    svg {
      margin-top: 0;
    }
  `}

  @media (max-width: 1024px) and (min-width: 769px)  {
    width: 300px;

    p{
      font-size: .8em;
    }
    strong{
      font-size: .9em;
    }
  }

  @media (max-width: 768px)  {
    width: 250px;

    div{
      p{
        font-size: .75em;
      }
      strong{
        font-size: .8em;
      }
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;