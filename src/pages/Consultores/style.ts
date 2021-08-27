import styled from 'styled-components';

export const Filters = styled.div`
    width: 95%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 6rem 0rem 0rem 4rem;
    
    div{
      width: 90%;
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    #filter{
      width: 90%;
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 3rem;
      margin-bottom: 3rem;
      p{
        color: #7E7E7E;
        font-size: 20px;
        text-align: center;
      }
      div{
        width: 150px;
        height: 20px;
        border: solid 1px  #7E7E7E;
        color:#7E7E7E;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        vertical-align: middle;
        display: table-cell;
      }
    }
    img{
      cursor: pointer;
    }
`;

export const Title = styled.h1`
    font-weight:normal;
    font-size: 20px;
    text-decoration: underline #0075B1;
    margin-left: 50px;
    width: 300px;
`;

export const Form = styled.form`
    width: 280px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    label {
      color: #7E7E7E;
      font-size: 20px;
      text-align: center;
    }  
`;

export const Consultores = styled.div`
    margin-left: 130px;
    margin-top: 50px;
    margin-bottom: 40px;
    height: 350px;

    table{
      border-collapse: collapse;
      width: 90%;
      text-align: center;
    }

    thead{
      background: #0075B1;
      text-transform: uppercase;
      font-size: 14px;
    }

    thead tr{
      color: #fff;
    }

    tr{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-bottom: 1px solid #7E7E7E;
      border-top: 0;
      height: 56px;
      color: rgba(0, 0, 0, 0.87);
      text-transform: uppercase;
      font-size: 14px;
      
      td{
        width: 150px;
      }
      
      td:nth-child(2){
        width: 450px;
        text-align: start;
      }

      button{
        background: #fff;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
      }
    }

    tbody {
      height: 350px;
      overflow-y: scroll;
      overflow-x: hidden;
      display: block;
      border: 1px solid #7E7E7E;
    }
`;

export const Container = styled.div`
  transition: 200ms ease-in-out;
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  visibility: hidden;
  width: 900px;
  height: 570px;
  padding: 10px;
  box-shadow: 0px 0px 100px 500px #7f7f7f60;

  button{
    float: right;
    color: black;
    margin-right: 20px;
    font-size: 30px;
    margin-top: 20px;
    background-color: transparent;
    border: 0;

    svg{
      color: black;
    }
  }
`;

export const PopUpInfo = styled.div`
  margin-top: 50px;
  margin-left: 35px;

  header{
    display: flex;
    align-items: center;
  }

  svg{
    color: #023A67;
    width: 100px;
    height: 100px;
    margin-left: 35px;
  }

  div{
    margin-left: 40px;
  }

  h1{
    font-size: 18px;
    font-weight: bolder;
    text-decoration: 2px underline #0075B1;
  }

  p{
    font-size: 18px;
    color: #7E7E7E;
    font-weight: lighter;
    margin-top: 4px;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 15px;
  width: 100%;
  height: 260px;
  justify-content: space-between;
`;

export const Skills = styled.div`
  width: 40%;

  h5{
    margin-bottom: 35px;
    margin-top: 5px;
  }
`;

export const HoldContent = styled.div`
  border: 1px solid #e2e2e280;
  margin-top: 5%;
  height: 88%;
  overflow-y: scroll;
  overflow-x: hidden;

  p{
    margin: 3%;
    margin-left: 15px;
    font-size: 14px;
  }
`;

export const PopUpTable = styled.div`
  width: 55%;
  height: 100%;
  margin-right: 15px;

  table{
    border-collapse: collapse;
    width: 100%;
    text-align: center;
  }

  thead{
    background: #0075B1;
    height: 40px;
    display: inline-flex;
    width:100%;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 15px;
  }

  thead tr{
    margin-top: 5px;
    color: #fff;  
    border: none;
  }
              
  tbody {
      height: 230px;
      overflow-y: scroll;
      overflow-x: hidden;
      display: block;
      border: 1px solid #e2e2e280;
  }

  tr {
      font-size: 14px;
      letter-spacing: 0.01071em;
      height: 17px;
      margin:15px;
      color: rgba(0, 0, 0, 0.87);
      border: 1px solid #e2e2e280;
  }

  td {
    padding: 5px;
      width: 484px;
}
`;