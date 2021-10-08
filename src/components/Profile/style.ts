import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 550px;
  background: #fff;
  position: fixed;
  top: 15%;
  left: -180px;
  padding: 10px;
  border: 1px solid #00579D;
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
      position: absolute;
      top: 45%;
      right: -15px;   
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-left: 15px solid #014C88;
    }

    &::before {
      content: "";
      position: absolute;
      top: 45%;
      right: -13px;  
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-left: 15px solid #fff;
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

        h2 {
          font-size: .9em;
        }

        p {
          font-size: .75em;
        }
      }

      img {
        height: 50px;
        width: 50px;
        transition: 1s;
      }
    }

    #notifications {
      max-height: 70%;
      min-height: 60%;
      width: 0;
      justify-content: start;
      overflow: hidden;

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