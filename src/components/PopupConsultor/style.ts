import styled, {css} from 'styled-components';

interface propriedadesPopup {
  mostrar: boolean;
}

export const Container = styled.div<propriedadesPopup>`

  ${(props) => !props.mostrar && 
    css`
      div {
        visibility: visible;
      }
  `}

  color: ${props => props.theme.cor.titulo};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  #segura{
    position: relative;
    background-color: ${props => props.theme.cor.fundo};
    width: 72vw;
    height: 90vh;
    padding: 1vw;
  }

  button{
    float: right;
    color: black;
    margin-right: 2vw;
    font-size: 1.9em;
    margin-top: 3vh;
    background-color: transparent;
    border: 0;

    svg{
      color: ${props => props.theme.cor.titulo};
    }
  }

  #grade{
    margin-left: 2vw;
  }
  
  @media (max-width: 768px)  {
    #segura{
      width: 89vw;
    }
  }
`;

export const InfoPopUp = styled.div`
  margin-top: 8vh;
  margin-left: 2vw;

  header{
    display: flex;
    align-items: center;
  }

  svg{
    color: ${props => props.theme.cor.corDoIcone};
    width: 8vw;
    height: 16vh;
    margin-left: 2vw;
  }

  div{
    margin-left: 3vw;
  }

  h1{
    font-size: 1.15em;
    font-weight: bolder;
    text-decoration: 2px underline ${props => props.theme.cor.undeline};
  }

  p{
    font-size: 1.15em;
    font-weight: lighter;
    margin-top: .6vh;
  }

  @media (max-width: 768px)  {
    
    h1,p{
      font-size: .9em;
    }
  }
`;

export const Conteudo = styled.div`
  display: flex;
  margin-top: 4vh;
  margin-bottom: 9vh;
  width: 70vw;
  height: 40vh;
  justify-content: space-between;

  @media (max-width: 768px)  {
    width: 78vw;
  }
`;

export const Habilidades = styled.div`
  width: 28vw;
  margin-left: 2vw;

  h5{
    margin-bottom: 5vh;
    margin-top: 1vh;
  }

  @media (max-width: 768px)  {
    h5{
      font-size: .9em;
    }
  }
`;

export const SeguraConteudo = styled.div`
  border: 1px solid #8B8787;
  height: 36vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1vw;
  display: flex;
  flex-direction: column;

  p{
    padding-top: 1vh;
  }

  
  @media (max-width: 768px)  {
    font-size: .9em;
    width: 35vw;
  }
`;

export const TabelaPopUp = styled.div`
  width: 35vw;
  height: 40vh;
  margin-right: 2vw;

  table{
    border-collapse: collapse;
    width: 35vw;
    text-align: center;
  }

  thead{
    background: ${props => props.theme.cor.thead};
    height: 6vh;
    display: inline-flex;
    width:35vw;
    text-transform: uppercase;
    font-size: .9em;
    margin-bottom: 2vh;
  }

  thead tr{
    margin-top: 1vh;
    color: #fff;  
    border: none;
  }
              
  tbody {
    height: 36.5vh;
    overflow-y: scroll;
    overflow-x: hidden;
    display: block;
    border: 1px solid #8B8787;
  }

  tr {
    font-size: .9em;
    letter-spacing: 0.01071em;
    height: 2vh;
    margin: 2vh;
    border-bottom: 1px solid #8B8787;
  }

  td {
    padding: 1vh;
    width: 12vw;
  }

  @media (max-width: 768px)  {
    table{
      width: 41vw;
      thead{
        width: 41vw;
      }

      td {
        font-size: .9em;
        width: 15vw;
      }
    }
    
  }
`;