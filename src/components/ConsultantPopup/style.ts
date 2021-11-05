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

  transition: 200ms ease-in-out;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  color: ${props => props.theme.cor.titulo};


  #hold{
    position: relative;
    background-color: ${props => props.theme.cor.fundo};
    width: 960px;
    height: 570px;
    padding: 10px;
  }

  

  button{
    float: right;
    color: black;
    margin-right: 20px;
    font-size: 1.9em;
    margin-top: 20px;
    background-color: transparent;
    border: 0;

    svg{
      color: ${props => props.theme.cor.titulo};
    }
  }

  #grid{
    margin-left: 30px;
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    #hold{
      width: 910px;
      height: 495px;
    }
  }

  
  @media (max-width: 768px)  {
    #hold{
      width: 685px;
      height: 480px;
    }
  }
`;

export const InfoPopUp = styled.div`
  margin-top: 50px;
  margin-left: 35px;

  header{
    display: flex;
    align-items: center;
  }

  svg{
    color: ${props => props.theme.cor.corDoIcone};
    width: 100px;
    height: 100px;
    margin-left: 35px;
  }

  div{
    margin-left: 40px;
  }

  h1{
    font-size: 1.15em;
    font-weight: bolder;
    text-decoration: 2px underline ${props => props.theme.cor.undeline};
  }

  p{
    font-size: 1.15em;
    font-weight: lighter;
    margin-top: 4px;
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    svg{
      width: 85px;
      height: 85px;
    }
    h1,p{
      font-size: 1.1em;
    }
  }

  @media (max-width: 768px)  {
    svg{
      width: 70px;
      height: 70px;
    }
    h1,p{
      font-size: .9em;
    }
  }
`;

export const Conteudo = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 60px;
  width: 100%;
  height: 260px;
  justify-content: space-between;

  @media (max-width: 1024px) and (min-width: 769px)  {
    margin-bottom: 10px;
  }

  @media (max-width: 768px)  {
    margin-bottom: 10px;
  }
`;

export const Habilidades = styled.div`
  width: 40%;
  margin-left: 30px;

  h5{
    margin-bottom: 35px;
    margin-top: 5px;
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    h5{
      font-size: .95em;
    }
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
  padding: 10px;

  @media (max-width: 1024px) and (min-width: 769px)  {
    height: 35vh;
  }
  @media (max-width: 768px)  {
    height: 35vh;
    font-size: .9em;
  }
`;

export const TabelaPopUp = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 30px;

  table{
    border-collapse: collapse;
    width: 100%;
    text-align: center;
  }

  thead{
    background: ${props => props.theme.cor.thead};
    height: 40px;
    display: inline-flex;
    width:100%;
    text-transform: uppercase;
    font-size: .9em;
    margin-bottom: 15px;
  }

  thead tr{
    margin-top: 5px;
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
    height: 17px;
    margin:15px;
    border-bottom: 1px solid #8B8787;
  }

  td {
    padding: 5px;
    width: 484px;
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    tbody{
      height: 35.5vh;
    }
  }
  @media (max-width: 768px)  {
    tbody{
      height: 35.2vh;
    }
    td {
      font-size: .9em;
    }
  }
`;