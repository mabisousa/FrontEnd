import styled from 'styled-components';

export const Filters = styled.div`
    width: 95%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 4rem 0 0 4rem;
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

export const Table = styled.table`
    margin-left: 130px;
    margin-top: 50px;
    margin-bottom: 40px;
    width: 80%;
    height: 400px;

    tr:nth-child(1){
        background: #0075B1;
        color: #fff;
    }

    tr{
        font-size: 0.875rem;
        letter-spacing: 0.01071em;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid #7E7E7E;
        border-top: 0;
        height: 56px;
        color: rgba(0, 0, 0, 0.87);
        text-transform: uppercase;
      
        td:nth-child(1){
            width: 150px;
        }
        td:nth-child(2){
            width: 450px;
            text-align: start;
        }
        td:nth-child(3){
            width: 150px;
        }
        td:nth-child(4){
            width: 150px;
        }
        td:nth-child(5){
            width: 150px;
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
`;

export const Container = styled.div`

`;

export const PopUp = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  background-color: #fff;

  .container .show {
    visibility: visible;
  }
  
  #overlay {
  position: fixed;
  opacity: 0;
  transition: 200ms ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  pointer-events: none;
}

#overlay.active {
  opacity: 1;
  pointer-events: all;
}
  width: 900px;
  height: 570px;
  color: black;
  padding: 10px;
  box-shadow: 5px 10px 35px #7e7e7e;

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: 1.25rem;
    font-weight: bold;
    float: right;
    margin-right: 10px;
    font-size: 30px;
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
    color: #fff;
    height: 40px;
    display: inline-flex;
    width:100%;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 15px;
  }

  thead tr{
    margin-top: 5px;
    border: none;
    color: #fff;
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
      width: 484px;
}
`;