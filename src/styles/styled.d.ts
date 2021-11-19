import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    titulo: string;

    cor: {
      fundo: string;
      fundoEscuro: string;
      titulo: string;
      undeline: string;
      corDoIcone: string;
      andamentoStatus: string;
      concluidoStatus: string;
      atrasadoStatus: string;
      fundoCard: string;
      secaoTitulo: string;
      data: string;
      bordaPerfil: string;
      bordaPerfilAfter: string;
      projetoMenu: string;
      aprovacaoMenu: string;
      consultoresMenu: string;
      listagemMenu: string;
      thead: string;
      bordaTabela: string;
      inativoStatus: string;
      habilidadeBotao: string;
      botaoReprovar: string;
      passo: string;
      passoAtivo: string;
    }
  }
}