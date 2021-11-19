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
  margin: 6rem 0rem 0rem 5rem;

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
    padding-left: 2px;
    background: transparent;
    border: 1px solid ${props => props.theme.cor.corDoIcone};
    min-height: 20px;
    font-size: 1em;
    color: ${props => props.theme.cor.corDoIcone};
    
    &::placeholder{
      color: ${props => props.theme.cor.corDoIcone};
    }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    label{
      font-size: 1em;
    }
  }

  @media (max-width: 768px)  {
    flex-wrap: wrap;
    width: 70vw;
    margin: 7rem 0rem 0rem 6rem;
  }
`;

export const Filtro = styled.div`
  width:90%;
  height: 60px;
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
    margin-left: 5px;
  }

  .secao{
    margin-right: 10px;
    margin-left: 15px;
  }

  .status{
    margin-right: 10px;
  }

  input{
    padding-left: 10px;
    margin-left: 10px;
    max-width: 80%;
  }

  svg{
    margin-left: 10px;
    border-left: 10px;
    height: 1.12em;
    width: 1.12em;
    color: ${props => props.theme.cor.corDoIcone};
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    input{
      width: 130px;    
    }
  }

  @media (max-width: 768px)  {
    margin-left: 1rem;
    input{
      width: 130px;    
    }
    label{
      font-size: 1em;
      margin-left: 10px;
    }
    svg{
      margin-left: 10px;
    }
  }
`;

export const Titulo = styled.h1`
  font-weight:normal;
  font-size: 1.25em;
  margin-left: 50px;
  width: 300px;
  color: ${props => props.theme.cor.titulo};
  text-decoration: underline ${props => props.theme.cor.undeline};

  @media (max-width:768px) {
    margin-left: 25px;
    font-size: 1.1em;
  }
`;

export const Cards = styled.div`
  width: 90vw;
  margin-left: 89.6px;
  margin-top: 48px;

  h1 {
    font-size: 20px;
    color: #020202;
    text-align: center;
  }
`;