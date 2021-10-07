import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 85%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 6rem 0rem 0rem 4rem;

        div{
            width: 90%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        button{
            border: none;
            background: transparent;
        }
  
        @media (max-width: 768px) {
            img{
                width: 25px;
            }
        }
`;

export const Filter = styled.div`
    margin-left: 5px;

    label{
        color: #7E7E7E;
        font-size: 20px;
        text-align: center;
        margin-left: 5px;
    }

    .secao{
        margin-right: 10px;
        margin-left: 15px;
    }

    .status{
        margin-right: 10px;
      
    }

    @media (max-width: 1024px) and (min-width: 769px)  {
        
        label{
            margin-left: 10px;
            
        }

        div{
            width: 130px;
        }
    }

    @media (max-width: 768px)  {
        
        label:nth-child(2){
            font-size: 16px;
            margin-left: 10px;
        }

        label:nth-child(4){

            font-size: 16px;
            margin-left: 10px;
        }

        div{
            width: 100px;
        }
    }
`;

export const Title = styled.h1`
    font-weight:normal;
    font-size: 20px;
    text-decoration: underline #0075B1;
    margin-left: 50px;
    width: 300px;

    @media (max-width:768px) {
        margin-right: 10px;
        font-size: 19px;
    }
`;

export const Form = styled.form`
    width: 280px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
    
    label {
        color: #7E7E7E;
        font-size: 20px;
        text-align: center;
    }

    input{
        padding-left: 10px;
        margin-left: 10px;
    }

    @media (max-width: 1024px) and (min-width: 769px) {
        width: 200px;
            input{
                width: 130px;
                
            }
    }

    @media (max-width:768px) {
        width: 150px;

        label{
             font-size: 16px;
        }
       
            input{
                width: 100px;
                margin-left: 5px;
            }
    }
`;

export const Cards = styled.div`
    width: 90%;
    height: 90%;
    margin-left: 89.6px;
    margin-top: 48px;

    @media (max-width: 425px){
        width: 100%;
    }
`;