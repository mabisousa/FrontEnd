import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vw;
  position: fixed;
`;

export const Filters = styled.div`
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
    color: ${props => props.theme.colors.iconColor};
    font-size: 1.25em;
    margin: 10px;
  }

  input{
    padding-left: 2px;
    background: transparent;
    border: 1px solid ${props => props.theme.colors.iconColor};
    
    &::placeholder{
      color: ${props => props.theme.colors.iconColor};
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

export const Filter = styled.div`
  width: 90vw;
  height: 9vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 35px;

  p{
    font-size: 1.25em;
    color: ${props => props.theme.colors.iconColor};
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

export const Title = styled.h1`
  font-weight:normal;
  font-size: 1.25em;
  margin-left: 50px;
  width: 300px;
  color: ${props => props.theme.colors.title};
  text-decoration: underline ${props => props.theme.colors.undeline};

    @media (max-width: 1024px) and (min-width: 769px) {
      width: 150px;
      font-size: 1em;
    }

    @media (max-width: 768px)  {
      width: 150px;
      font-size: 0.9em;
    }
`;

export const Form = styled.form`
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

export const Filterbynumber = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  input{
    width: 60px;
  }

  p{
    margin: 0px 5px;
    font-size: 1.25em;
  }  

  @media (max-width: 1024px) and (min-width: 769px) {
    p{
      font-size: 1em;
    }
  }

  @media (max-width: 768px)  {
    p{
      font-size: 0.9em;
    }
    input{
      width: 40px;
    }
  }
`;