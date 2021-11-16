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
  min-height: 150px;
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
      min-height : 200px;
      
      @media (max-width: 1024px) and (min-width: 769px) {
        width: 35vw;
      }
      
      @media (max-width: 768px){
        width: 36vw;
      }

    `: css`
      width:40vw; 
      min-height: 150px;

      @media (max-width: 1024px) and (min-width: 769px) {
        width: 39.5vw;
        min-height : 150px;
      }

      @media (max-width: 768px){
        width: 72vw;
      }
  `}
`;

export const TituloSecao = styled.p<propriedadesCard>`
  width: 200px;
  margin-top: 1rem;
  margin-left: 2rem;
  color: ${props => props.theme.cor.secaoTitulo};

  ${(props) => props.mostrar ? 
    css` 
      @media (max-width: 768px){
        width: 215px;
        font-size: .9em;
      }
    `: css`

  `}

  
`;

export const TituloProjeto = styled.p<propriedadesCard>`
  margin-left: 2rem;
  color: ${props => props.theme.cor.titulo};

  ${(props) => props.mostrar ? 
    css` 
      width: 315px;
      font-size: 1em;
      margin-top: 1rem; 

      @media (max-width: 1024px) and (min-width: 769px) {
        width: 300px;
      }
      @media (max-width: 768px){
        width: 215px;
        font-size: .9em;
      }
      
    `: css`
      width: 500px;
      font-size: 1.15em;
      margin-top: 0;

      @media (max-width: 1024px) and (min-width: 769px) {
        width: 340px;
      }
  `}
`;

export const SeguraHoras = styled.div<propriedadesCard>`
  width:200px;
  height:40px;
  float: left;
  color: ${props => props.theme.cor.titulo};

  ${(props) => props.mostrar ? 
    css` 
      margin-left: 7px;
      margin-top: 1rem; 

      @media (max-width: 1024px) and (min-width: 769px) {
        height: 35px;
      }

      @media (max-width: 768px){
        p{
          font-size: .9em;
        }
      }

    `: css`
      margin-left: 2rem;
      margin-top: 7px;

      @media (max-width: 1024px) and (min-width: 769px) {
        max-width: 240px;
      }
  
  `}
`;

export const Hora = styled.div<propriedadesCard>`
  min-height:20px;
  margin-left: 15%;
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  
  ${(props) => props.mostrar ? 
    css` 
      width: 155px;
   
      
    `: css`
      width:200px;

      @media (max-width: 1024px) and (min-width: 769px) {
        max-width: 155px;
      }
  `}
`;

export const Status = styled.div<propriedadesCard>`
  width:7.7em;
  max-width: 10em;
  float:right;
  text-align: center;
  color: ${props => props.theme.cor.titulo};

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
      margin-top: 17px;
      margin-right: 16px;
      height:60px;
      
      p:nth-child(1){
        font-size: .9em;
      }

      p:nth-child(2){
        font-size: 1em;
      }

      @media (max-width: 1024px) and (min-width: 769px) {
        height: 50px;
      }

      @media (max-width: 768px){
        height: 50px;
      }
      
    `: css`
      margin-top: 7px;
      margin-right: 32px;
      height:60px;

      p:nth-child(1){
        font-size: .95em;
      }

      p:nth-child(2){
        font-size: 1.1em;
      }
    }
  `}

`;

export const Data = styled.div<propriedadesCard>`
  min-height:15px;
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  color: ${props => props.theme.cor.data};
  
  p {
    float: left;
    font-size: .75em;
  }

  ${(props) => props.mostrar ? 
    css` 
      width: 300px;

      @media (max-width: 1024px) and (min-width: 769px) {
       height: 30px;
       width: 285px;  
      }

      @media (max-width: 768px){
        width: 205px;
        height: 25px;
      }

    `: css`
      width: 465px;

      @media (max-width: 1024px) and (min-width: 769px) {
        max-width: 335px;
      }

      @media (max-width: 768px){
        width: 470px;  
      }

  `}
 
`;