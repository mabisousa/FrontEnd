 import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 5%;
`;

export const ImgLogo = styled.img`
  width: 150px;
  background-color: white;
  margin-top: -50px;
  margin-bottom: 60px;
`;

export const Inputs = styled.div`
  width: 450px;
  height: 500px;
  margin: auto;
  display:flex;
  align-items: center;
  border: 1px solid #DADCE0;
  border-radius: .5rem;

  form {
    margin: 0 auto;
    width: 360px;
    text-align: center;
  }
`;

export const FormButton = styled.button`
  padding: .75rem 2rem;
  border: none;
  background-color: rgb(0, 87, 157);
  color: #fff;
  font-size: 1em;
  border-radius: .5rem;
  cursor: pointer;
  transition: .3s;
  margin: auto;

  &:hover {
    box-shadow: 0 10px 36px rgba(0,0,0,.15);
  }  
`;

export const HoldButton = styled.div`
  width: 100%;
  height: 40px;
    
  button{
    background: transparent;
    border: none;
    color: #448DCA;
    font-size: 0.75em;
    text-decoration: underline;
    float: left ;
  }
`;