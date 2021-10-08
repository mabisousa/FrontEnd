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
  font-size: 1em;
  border: 1px solid #DADCE0;
  border-radius: .5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 10;

  &:focus{
    border: 1.5px solid rgb(0, 87, 157);
  }

  &:focus + #form__label{
    top: -.4rem;
    left: .8rem;
    color: rgb(0, 87, 157);
    font-size: 0.75em;
    font-weight: 500;
    z-index: 10;
  }

  &:not(:placeholder-shown) + #form__label{
    top: -.4rem;
    left: .8rem;
    font-size: 0.75em;
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
  background-color: #fff;
  color: #80868B;
  font-size: 1em;
  transition: .3s;

  ${(props) => props.hasError && css`
    color: #c53030;
  `}
`;

export const Container = styled.div`
  position: relative;
  height: 48px;
  margin-bottom: 1.5rem; 
  
`;