import styled, { css } from 'styled-components';

interface propriedadesCard {
  cor?: string,
  mostrar: boolean;
}

export const Container = styled.a<propriedadesCard>`
  cursor: pointer;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
  margin: 1rem;
  float: left;
  background: ${props => props.theme.cor.fundoCard}; 

  ${(props) => props.cor === "ANDAMENTO" &&
    css`
      border-left:  15px solid ${props => props.theme.cor.andamentoStatus};
    `}

  ${(props) => props.cor === "CONCLUÍDO" && 
    css`
      border-left:  15px solid ${props => props.theme.cor.concluidoStatus};
    `}

  ${(props) => props.cor === "ATRASADO" &&
    css`
      border-left:  15px solid ${props => props.theme.cor.atrasadoStatus};
    `}

  ${(props) => props.mostrar ? 
    css` 
      width: 27vw;
      min-height : 31vh;
      
      @media (max-width: 1024px) and (min-width: 769px) {
        width: 35vw;
      }
      
      @media (max-width: 768px){
        width: 36vw;
      }

    `: css`
      width:40vw; 
      min-height: 23vh;
      
      @media (max-width: 768px){
        width: 72vw;
      }
  `}

  @media (max-width: 768px){
    margin-left: 5vw;
  }
`;

export const TituloSecao = styled.p<propriedadesCard>`
  width: 18vw;
  margin-top: 2vh;
  margin-left: 2vw;
  color: ${props => props.theme.cor.secaoTitulo};
`;

export const TituloProjeto = styled.p<propriedadesCard>`
  margin-left: 2vw;
  color: ${props => props.theme.cor.titulo};

  ${(props) => props.mostrar ? 
    css` 
      width: 23vw;
      font-size: 1em;

      @media (max-width: 1024px) and (min-width: 769px) {
        width: 30vw;
      }
      @media (max-width: 768px){
        width: 28vw;
      }
      
    `: css`
      width: 35vw;
      font-size: 1.15em;

      @media (max-width: 768px){
        width: 64vw;
      }
  `}
`;

export const SeguraHoras = styled.div<propriedadesCard>`
  width: 20vw;
  height:6vh;
  float: left;
  color: ${props => props.theme.cor.titulo};

  ${(props) => props.mostrar ? 
    css` 
      margin-left: 1vw;
      margin-top: 2vh; 

      @media (max-width: 1024px) and (min-width: 769px) {
        width: 23vw;
      }

      @media (max-width: 768px){
        width: 24vw;
        p{
          font-size: .9em;
        }
      }

    `: css`
      margin-left: 2vw;
      margin-top: 1vh;
  `}
`;

export const Hora = styled.div<propriedadesCard>`
  min-height:3vh;
  margin-left: 3vw;
  display: flex;
  justify-content: space-between;
  margin-top: .3vw;
  
  ${(props) => props.mostrar ? 
    css` 
      width: 12vw;
    `: css`
      width:15vw;
  `}
`;

export const Status = styled.div<propriedadesCard>`
  width:9vw;
  float:right;
  text-align: center;
  color: ${props => props.theme.cor.titulo};
  height:9vh;

  p:nth-child(1){
    font-weight: regular;
    font-size: .95em;
  }

  p:nth-child(2){
    font-weight: bold;
    font-size: 1.1em;
  }

  ${(props) => props.mostrar ? 
    css` 
      margin-top: 2vh;
      margin-right: 1vw;
      
      
      p:nth-child(1){
        font-size: .9em;
      }

      p:nth-child(2){
        font-size: 1em;
      }
    `: css`
      margin-top: 1vh;
      margin-right: 2vw;

      p:nth-child(1){
        font-size: .95em;
      }

      p:nth-child(2){
        font-size: 1.1em;
      }
    }
  `}
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 12vw;
  }

  @media (max-width: 768px){
    width: 15vw;
  }

`;

export const Data = styled.div<propriedadesCard>`
  min-height:2vw;
  display: flex;
  justify-content: space-between;
  margin-left: 2vw;
  color: ${props => props.theme.cor.data};
  
  p {
    float: left;
    font-size: .75em;
  }

  ${(props) => props.mostrar ? 
    css` 
      width: 22vw;

      @media (max-width: 1024px) and (min-width: 569px) {
       width: 30vw;  
      }

    `: css`
      width: 34vw;

      @media (max-width: 768px){
        width: 64vw;   
      }

  `}
 
`;