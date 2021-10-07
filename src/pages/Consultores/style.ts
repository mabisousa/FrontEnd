import styled from 'styled-components';

export const Filters = styled.div`
    width: 85%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 6rem 0rem 0rem 4rem;

      div{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
      }

      button{
          border: none;
          background: transparent;
      }

      p{
        color: #7E7E7E;
        font-size: 20px;
      }

      #img{
        float: right;
      }

      label{
        color: #7E7E7E;
        font-size: 20px;
        margin: 10px;
      }

      input{
        padding-left: 2px;
      }
`;

export const Filter = styled.div`
    width: 90%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p{
      color: #7E7E7E;
      font-size: 20px;
      text-align: center;
      margin-right: 10px;
      margin-left: 10px;
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

    input{
      height: 20px;
    }
`;

export const Filterbynumber = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    input{
      width: 60px;
    }

    p{
      margin: 0px 5px;
      font-size: 20px;
    }  
`;