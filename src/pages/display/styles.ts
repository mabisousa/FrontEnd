import styled from 'styled-components';

export const Title = styled.h1`
    font-weight:normal;
    font-size: 20px;
    text-decoration: underline #0075B1;
    margin-left: 50px;
    width: 300px;
`;

export const Cards = styled.div`
    width: 90%;
    height: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-left: 5.6rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
`;

export const Card = styled.a`
    background-color: #FFFFFF;
    width: 30%;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
    height: 200px;
    margin: 1rem;
    float: left;
    color: black;

`;

export const BarStatus = styled.div`
    background-color: #EBB93A;
    height: 200px;
    width: 13px;
    box-shadow: 0 5px 5px rgb(0 0 0 / 0.2);
    position: absolute;
`;

export const TitleSection = styled.p`
    width: 200px;
    font-size: 12px;
    color: #0075B1;
    margin-top: 1rem;
    margin-left: 2rem;
`;

export const TitleProject = styled.p`
    width: 315px;
    color: #000000;
    font-size: 16px;
    margin-top: 1rem;
    margin-left: 2rem;
`;

export const HoldHours = styled.div`
    width:200px;
    height:40px;
    float: left;
    margin-top: 1rem;
    margin-left: 1rem;
`;

export const Hours = styled.div`
    width:150px;
    height:20px;
    margin-left: 15%;
    display: flex;
    justify-content: space-between;
    font-size:11px;
        
        p {
            margin-top: 2px;
            font-size: 11px;
        }
`;


export const Status = styled.div`
    width:120px;
    height:60px;
    float:right;
    margin-top: 17px;
    margin-right: 16px;
    text-align: center;

        p:nth-child(1){
            font-weight: regular;
                font-size: 14px;
        }

        p:nth-child(2){
            font-weight: bold;
            font-size: 16px;
        }

`;

export const Date = styled.div`
    width:282px;
    height:15px;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin-left: 3rem;

        p {
            color: #7E7E7E;
            float: left;
            font-size: 12px;
        }
`;