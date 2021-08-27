import styled from 'styled-components';

export const Main = styled.main`
  display:flex;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  align-items: center;
  border: 1px solid #DADCE0;
  border-radius: .5rem;

    form {
      margin: 0 auto;
      width: 360px;
      border-radius: 1rem;
      text-align: center;
    }
`;


export const FormDiv = styled.div`
  position: relative;
  height: 48px;
  margin-bottom: 1.5rem; 
`;

export const FormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border: 1px solid #DADCE0;
  border-radius: .5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;

  &:focus{
    border: 1.5px solid rgb(0, 87, 157);
  }

  #form__input&:focus + #form__label{
    top: -.5rem;
    left: .8rem;
    color: rgb(0, 87, 157);
    font-size: .75rem;
    font-weight: 500;
    z-index: 10;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 .25rem;
  background-color: #fff;
  color: #80868B;
  font-size: 1rem;
  transition: .3s;
`;

export const FormButton = styled.input`
  display: block;
  padding: .75rem 2rem;
  outline: none;
  border: none;
  background-color: rgb(0, 87, 157);
  color: #fff;
  font-size: 1rem;
  border-radius: .5rem;
  cursor: pointer;
  transition: .3s;
  margin: auto;

  &:hover {
    box-shadow: 0 10px 36px rgba(0,0,0,.15);
  }  
`;

export const Button = styled.div`
width: 100%;
height: 40px;
  button{
    background: transparent;
    border: none;
    color: #448DCA;
    font-size: 12px;
    text-decoration: underline;
    
    float: left ;
    /*margin-right: 235px;*/
  }
`;