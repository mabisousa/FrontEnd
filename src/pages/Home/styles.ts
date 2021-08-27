import styled from 'styled-components';

export const Title = styled.h1`
    font-weight:normal;
    font-size: 20px;
    text-decoration: underline #0075B1;
    margin-left: 50px;
    width: 300px;
    margin: 6rem 0rem 0rem 4rem;
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
    width: 45%;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
    height: 150px;
    margin: 1rem;
    float: left;
    color: black;

`;

export const BarStatus = styled.div`
    background-color: #EBB93A;
    height: 150px;
    width: 13px;
    box-shadow: 0 5px 5px rgb(0 0 0 / 0.2);
    position: absolute;
`;

export const TitleSection = styled.p`
    width: 200px;
    font-size: 14px;
    color: #0075B1;
    margin-top: 1rem;
    margin-left: 2rem;
`;

export const TitleProject = styled.p`
    width: 500px;
    color: #000000;
    font-size: 18px;
    margin-left: 2rem;
`;

export const HoldHours = styled.div`
    width:200px;
    height:40px;
    float: left;
    margin-top: 7px;
    margin-left: 2rem;
`;

export const Hours = styled.div`
    width:200px;
    height:20px;
    margin-left: 15%;
    display: flex;
    justify-content: space-between;
        
        p {
        margin-top: 2px;
        font-size: 12px;
        }
`;


export const Status = styled.div`
    width:130px;
    height:80px;
    float:right;
    margin-right: 32px;
    margin-top: 7px;
    text-align: center;

        p:nth-child(1){
            font-weight: regular;
            font-size: 15px;
        }

        p:nth-child(2){
            font-weight: bold;
            font-size: 17px;
        }

`;

export const Date = styled.div`
    width:300px;
    height:15px;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    margin-left: 2rem;

        p {
            color: #7E7E7E;
            float: left;
            font-size: 12px;
        }
`;