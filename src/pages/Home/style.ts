import styled, {css} from 'styled-components';

interface changeTheme{
  darkMode: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
`;

export const Filters = styled.div`
  width: 85%;
  height: 60px;
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
    color: #7E7E7E;
  }

  input{
    padding-left: 2px;
    background: transparent;
    border: 1px solid #7E7E7E;
    min-height: 20px;
    font-size: 1em;
    
    &::placeholder{
      color: #7E7E7E;
    }
  }
`;

export const Filter = styled.div`
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

  img{
    margin-left: 10px;
    border-left: 10px;
    height: 1.31em;
    width: 1.31em;
  }

  @media (max-width: 1024px) and (min-width: 769px)  {
    label{
      margin-left: 10px;  
    }

    div{
      width: 130px;
    }

    input{
      width: 130px;    
    }
  }

  @media (max-width: 768px)  {
    label:nth-child(2){
      font-size: 1em;
      margin-left: 10px;
    }

    label:nth-child(4){
      font-size: 1em;
      margin-left: 10px;
    }

    div{
      width: 100px;
    }

    img{
      width: 25px;
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

  @media (max-width:768px) {
    margin-right: 10px;
    font-size: 1.2em;
  }
`;

export const Cards = styled.div`
  width: 90%;
  margin-left: 89.6px;
  margin-top: 48px;

  @media (max-width: 425px){
    width: 100%;
  }
`;