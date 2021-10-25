import styled, {css} from 'styled-components';

interface changeTheme{
  darkMode: boolean;
}

export const Container = styled.main<changeTheme>`
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const Filters = styled.div<changeTheme>`
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

  #img{
    float: right;
  }

  label{
    color: #7E7E7E;
    font-size: 1.25em;
    margin: 10px;
  }

  input{
    padding-left: 2px;
    background: transparent;
    border: 1px solid #7E7E7E;
    
    &::placeholder{
      color: #7E7E7E;
    }
  }
`;

export const Filter = styled.div<changeTheme>`
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p{
    font-size: 1.25em;
    color: #7E7E7E;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
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
`;

export const Form = styled.form`
  width: 280px;
  height: 60px;
  display: flex;
  align-items: center;

  input{
    height: 20px;
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
`;