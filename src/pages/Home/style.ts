import styled from 'styled-components';

export const Container = styled.div`
  width: 99vw;
  height: auto;
  position: absolute;
`;

export const Filtros = styled.div`
  width: 85vw;
  height: 9vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15vh 0 0 6vw;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  button{
    border: none;
    background: transparent;
  }
  
  label{
    font-size: 1.25em;
    color: ${props => props.theme.cor.corDoIcone};
  }

  input{
    padding-left: 1vw;
    background: transparent;
    border: 1px solid ${props => props.theme.cor.corDoIcone};
    font-size: 1em;
    color: ${props => props.theme.cor.corDoIcone};
    
    &::placeholder{
      color: ${props => props.theme.cor.corDoIcone};
    }
  }

  @media (max-width: 768px)  {
    flex-wrap: wrap;
    width: 70vw;
    margin: 19vh 0 0 13vw;
  }
`;

export const Filtro = styled.div`
  width:85vw;
  height: 9vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button{
    border: none;
    background: transparent;
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 1.25em;
  }

  label{
    font-size: 1.25em;
    text-align: center;
    margin-left: 1vw;
  }

  .secao{
    margin-right: 1vw;
  }

  .status{
    margin-right: 1vw;
  }

  svg{
    margin-left: 1vw;
    border-left: 1vw;
    height: 1.12em;
    width: 1.12em;
    color: ${props => props.theme.cor.corDoIcone};
  }

  @media (max-width: 768px)  {
    margin-left: 2vw;
    label{
      font-size: 1em;
    }
    
  }
`;

export const Titulo = styled.h1`
  font-weight:normal;
  font-size: 1.25em;
  margin-left: 4vw;
  width: 29vw;
  color: ${props => props.theme.cor.titulo};
  text-decoration: underline ${props => props.theme.cor.undeline};

  @media (max-width:768px) {
    margin-left: 3vw;
    font-size: 1.1em;
  }
`;

export const Formulario = styled.form`
  width: 22vw;
  height: 5vw;
  display: flex;
  align-items: center;

  input{
    padding-left: 1vw;
    margin-left: 1vw;
    max-width: 16vw;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 25vw;
  }

  @media (max-width: 768px)  {
    width: 25vw;
  }
`;

export const Cards = styled.div`
  width: 90vw;
  margin-left: 7vw;
  margin-top: 6vh;

  h1 {
    font-size: 1.25em;
    color: ${props => props.theme.cor.titulo};
    text-align: center;
  }
`;

