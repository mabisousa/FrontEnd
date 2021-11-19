import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position : fixed;
  right:0px;
  top: 215px;
  height: 305px;
  width: 150px;
  margin: 0px;
  z-index: 9;

  a:nth-child(1) {
    top:0px;

    div {
      background: ${props => props.theme.cor.projetoMenu};
    }
  }

  a:nth-child(2) {
    top:60px;

    div {
      background: ${props => props.theme.cor.aprovacaoMenu};
    }
  }

  a:nth-child(3) {
    top:120px;

    div {
      background: ${props => props.theme.cor.consultoresMenu};
    }
  }

  a:nth-child(4) {
    top:180px;

    div {
      background: ${props => props.theme.cor.listagemMenu};
    }
  }

  a:nth-child(5) {
    top:240px;

    div {
      background: ${props => props.theme.cor.requisicaoMenu};
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: .5em;
    position: relative;
    position: absolute;
    right: -110px;

    div {
      height: 50px;
      width: 170px;
      margin: 5%;
      display: flex;
      align-items: center;
      padding: 5%;

      img {
        height: 35px;
        width: 35px;
        background-size: cover;
      }

      h1 {
        margin: 0% 10%;
      }
    }
    
    &:hover {
      right: 0;
      transition: 0.5s;
    }
  }
`;