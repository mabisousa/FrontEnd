import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.cor.fundoCard};
  box-shadow: 5px 5px 5px rgb(0 0 0 / 20%);
  min-height: 50px;
  max-width: 100%;
  margin:5px 0px;
`;