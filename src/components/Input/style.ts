import styled, { css } from "styled-components";

interface ContainerProps {
  hasError: boolean;
}

export const FormInput = styled.input<ContainerProps>`
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
  z-index: 10;
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

  ${(props) => props.hasError && css`
    border-color: #c53030;
  `}
`;

export const FormLabel = styled.label<ContainerProps>`
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 .25rem;
  background-color: #fff;
  color: #80868B;
  font-size: 1rem;
  transition: .3s;

  ${(props) => props.hasError && css`
    color: #c53030;
  `}
`;

export const FormDiv = styled.div`
  position: relative;
  height: 48px;
  margin-bottom: 1.5rem; 
  
`;