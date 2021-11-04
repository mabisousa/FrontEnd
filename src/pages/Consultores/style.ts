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
  margin: 6rem 0rem 0rem 5rem;

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
    color: ${props => props.theme.cor.iconColor};
    font-size: 1.25em;
    margin: 10px;
  }

  input{
    padding-left: 10px;
    background: transparent;
    border: 1px solid ${props => props.theme.cor.iconColor};
    
    &::placeholder{
      color: ${props => props.theme.cor.iconColor};
    }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    label{
      font-size: 1em;
    }
  }

  @media (max-width: 768px)  {
    width: 70vw;
    label{
      font-size: 0.9em;
    }
  }
`;

export const Filtro = styled.div`
  width: 90vw;
  height: 9vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 35px;

  p{
    font-size: 1.25em;
    color: ${props => props.theme.cor.iconColor};
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  } 

  @media (max-width: 1024px) and (min-width: 769px) {
      width:70vw;
      p{
        font-size: 1em;
      }
    }

  @media (max-width: 768px)  {
    width:55vw;
    p{
      font-size: 0.9em;
    }
  }
`;

export const Titulo = styled.h1`
  font-weight:normal;
  font-size: 1.25em;
  margin-left: 50px;
  width: 300px;
  color: ${props => props.theme.cor.title};
  text-decoration: underline ${props => props.theme.cor.undeline};

    @media (max-width: 1024px) and (min-width: 769px) {
      width: 150px;
      font-size: 1em;
    }

    @media (max-width: 768px)  {
      width: 150px;
      font-size: 0.9em;
    }
`;

export const Formulario = styled.form`
  width: 280px;
  height: 60px;
  display: flex;
  align-items: center;

  input{
    height: 20px;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 230px;
    input{
      width: 150px;
    }
  }
  @media (max-width: 768px)  {
    width: 230px;
    input{
      width: 100px;
    }
  }
`;