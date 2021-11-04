import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.cor.headerBackground};
  border: 1px solid ${props => props.theme.cor.profileBorder};

  width: 250px;
  height: 550px;
  position: fixed;
  top: 15%;
  left: -180px;
  padding: 10px;
  border-radius:00px 20px 20px 0px;
  box-shadow: 0px 0px 5px 2px #e2e2e280;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: 1s;
  z-index: 999;

  div {
    width: 50px;
    height: 99%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 1s;

    &::after {
      content: "";
      border-left: 15px solid ${props => props.theme.cor.profileBorderAfter};
      position: absolute;
      top: 45%;
      right: -15px;   
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
    }

    &::before {
      content: "";
      position: absolute;
      border-left: 15px solid ${props => props.theme.cor.headerBackground};
      top: 45%;
      right: -13px;  
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      z-index: 2; 
    }

    #perfil {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      #txt {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 0;
        height: 30px;
        overflow: hidden;
        transition: 1s;
        color: ${props => props.theme.cor.iconColor};

        h2 {
          font-size: .9em;
        }

        p {
          font-size: .75em;
        }
      }

      svg {
        color: ${props => props.theme.cor.iconColor}; 
        height: 50px;
        width: 50px;
        margin: 10px;
        transition: 1s;
      }
    }

    #notifications {
      max-height: 70%;
      min-height: 60%;
      width: 0;
      justify-content: start;
      overflow: hidden;
      color: ${props => props.theme.cor.iconColor};

      h3 { 
        border-bottom: 2px solid #28B9DA;
        margin-bottom: 10px; 
      }

      #hold {
        width: 100%;
        border-left: 1px solid #e2e2e2;
        padding:0 5%;
        overflow-y: scroll;
        
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }

  &:hover {
    left: 0;
    
    div {
      width: 230px;

      #perfil {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;

        img {
          height: 130px;
          width: 130px;
          margin: 5% 17%;
          transition: 1s;
        }

        #txt {
          width: 100%;
          height: auto;
          transition: 2s;
        }
      }

      #notifications {
        width: 100%;
        padding: 15px;
        transition: 1s;
      }
    }
  }
`;