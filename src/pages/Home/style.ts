import styled, {css} from 'styled-components';

interface changeTheme{
  darkMode: boolean;
}

export const Container = styled.div<changeTheme>`
  width: 100%;
  height: 85.4vh;

  ${(props) => props.darkMode ?
    css`
      background: #fff; 
    `: css`
      background: #1F262B;
    `}
`;

export const Filters = styled.div<changeTheme>`
  width: 85%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 6rem 0rem 0rem 4rem;

  ${(props) => props.darkMode ?
    css`
      label{
        color: #7E7E7E;
      }
    `: css`
      label{
        color: #fff;
      }
      input{
        background: #1F262B;
        border: 1px solid #fff;
        
        &::placeholder{
          color: #fff;
        }
      }
    `}

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

  #img{
    float: right;
  }

  label{
    font-size: 1.25em;
    margin: 10px;
  }

  input{
    padding-left: 2px;
  }
`;

export const Filter = styled.div<changeTheme>`
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${(props) => props.darkMode ?
    css`
      label{
        color: #7E7E7E;
      }
    `: css`
      label{
        color: #fff;
      }
      input{
        background: #1F262B;
        border: 1px solid #fff;
        
        &::placeholder{
          color: #fff;
        }
      }
    `}

  button{
    border: none;
    background: transparent;
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

export const Title = styled.h1<changeTheme>`
  font-weight:normal;
  font-size: 1.25em;
  margin-left: 50px;
  width: 300px;

  ${(props) => props.darkMode ?
    css`
      color: #000;
      text-decoration: underline #0075B1;
    `: css`
      color: #fff;
      text-decoration: underline #57B7DC;
    `}

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