import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  margin-top: 40px;
  height:50px;
  width:120px;
  color: #fff;
  background: ${props => props.theme.cor.habilidadeBotao};
`;