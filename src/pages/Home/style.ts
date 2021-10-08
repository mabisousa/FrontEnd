import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .containerHead{

        width: 85%;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 6rem;

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
            margin-left: 10px;
        }
  
        @media (max-width: 768px) {
            img{
                width: 25px;
            }
        }
    }
`;

export const Filter = styled.div`
    margin-left: 5px;

    label{
        color: #7E7E7E;
        font-size: 1.25em;
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

    
    input{
        padding-left: 10px;
        margin-left: 10px;
        max-width: 80%;
    }

    @media (max-width: 1024px) and (min-width: 769px)  {
        
        label{
            margin-left: 10px;
            
        }

        div{
            width: 130px;
        }

        input{
                width: 130px;
                
            }
    }

    @media (max-width: 768px)  {
        
        label:nth-child(2){
            font-size: 1em;
            margin-left: 10px;
        }

        label:nth-child(4){

            font-size: 1em;
            margin-left: 10px;
        }

        div{
            width: 100px;
        }
    }
`;

export const Title = styled.h1`
    font-weight:normal;
    font-size: 1.25em;
    text-decoration: underline #0075B1;
    margin-left: 50px;
    width: 300px;

    @media (max-width:768px) {
        margin-right: 10px;
        font-size: 1.2em;
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