import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vw;
  position: fixed;
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
  }

  button{
    border: none;
    background: transparent;
  }

  #img{
    float: right;
  }

  label{
    color: ${props => props.theme.cor.corDoIcone};
    font-size: 1.25em;
    margin: 1vh;
  }

  input{
    padding-left: 1vw;
    background: transparent;
    border: 1px solid ${props => props.theme.cor.corDoIcone};
    color: ${props => props.theme.cor.corDoIcone};
    
    &::placeholder{
      color: ${props => props.theme.cor.corDoIcone};
    }
  }

  @media (max-width: 768px)  {
    width: 82vw;    
  }
`;

export const Filtro = styled.div`
  width:85vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;

  label{
    font-size: 1.25em;
    color: ${props => props.theme.cor.corDoIcone};
    text-align: center;
    margin-right: 1vw;
    margin-left: 1vw;
  } 

  div{
    label{
      margin-right: 1vw;
      margin-left: 4vw;
    }
  }
  
  @media (max-width: 768px)  {
    width:55vw;
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

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 22vw;
  }
 
  @media (max-width: 768px)  {
    font-size: 1em;
    margin-left: 7vw;
  }
`;

export const Formulario = styled.form`
  width: 22vw;
  height: 5vw;
  display: flex;
  align-items: center;

  input{
    padding-left: 1vw;
    max-width: 16vw;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 25vw;
  }

  @media (max-width: 768px)  {
    width: 29vw;
  }
`;