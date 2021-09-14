import styled from 'styled-components';

export const Filters = styled.div`
    width: 95%;
    height: 60px;
    display: flex;
    flex-direction: row;
    margin: 6rem 0rem 0rem 4rem;
    
    div{
      width: 90%;
      height: 60px;
      display: flex;
      align-items: center;
    }
    #filter{
      width: 90%;
      height: 60px;
      margin-top: 3rem;
      margin-bottom: 3rem;

        p{
          color: #7E7E7E;
          font-size: 20px;
        }
      
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
    align-items: center;
    justify-content: space-between;

    label {
      color: #7E7E7E;
      font-size: 20px;
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
      border-bottom: 1px solid #8B8787;
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
        font-size: 20px;
      }
    }

    tbody {
      height: 350px;
      overflow-y: scroll;
      overflow-x: hidden;
      display: block;
      border: 1px solid #8B8787;
    }
`;