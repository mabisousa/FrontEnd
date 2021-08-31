import styled from 'styled-components';

export const Cards = styled.div`
    width: 90%;
    height: 90%;
    margin-left: 89.6px;
    margin-top: 48px;

    @media (max-width: 425px){
        width: 100%;
    }
`;

export const Card = styled.a`
    background-color: #FFFFFF;
    cursor: pointer;
    width: 45%;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
    height: 150px;
    margin: 1rem;
    float: left;

    @media (max-width: 425px){
        width: 100%;
    }
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

    @media (max-width: 1024px) and (min-width: 426px) {
        font-size: 13px;
    }
    
    @media (max-width: 425px){
        font-size: 80%;
    }
`;

export const TitleProject = styled.p`
    width: 500px;
    color: #000000;
    font-size: 18px;
    margin-left: 2rem;

    @media (max-width: 1024px) and (min-width: 769px) {
        font-size: 15px;
    }
    
    @media (max-width: 768px) and (min-width: 426px) {
        font-size: 12px;
    }

    @media (max-width: 425px){
        font-size: 100%;
    }
`;

export const HoldHours = styled.div`
    width:200px;
    height:40px;
    float: left;
    margin-top: 7px;
    margin-left: 2rem;

    @media (max-width: 425px){
        margin-left: 2rem;
        width: 150px;
    }
`;

export const Hours = styled.div`
    width:200px;
    height:20px;
    margin-left: 15%;
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
    font-size: 12px;   
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

    @media (max-width: 1024px) and (min-width: 769px) {
        margin-right: 5px;
        p:nth-child(1){
            font-weight: regular;
            font-size: 13px;
        }

        p:nth-child(2){
            font-weight: bold;
            font-size: 15px;
        }
    }

    @media (max-width: 768px) and (min-width: 426px) {
        margin-right: 15px;
        p:nth-child(1){
            font-weight: regular;
            font-size: 13px;
        }

        p:nth-child(2){
            font-weight: bold;
            font-size: 15px;
        }
    }

    @media (max-width: 425px){
        margin-right: 5px;
        p:nth-child(1){
            font-weight: regular;
            font-size: 70%;
        }

        p:nth-child(2){
            font-weight: bold;
            font-size: 75%;
        }
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

    @media (max-width: 768px) and (min-width: 426px) {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        p {
            margin-top: -75px;
        }

        p:nth-child(2) {
            margin-top: -150px;
        }
    }
`;






















































export const Container = styled.div`
    height: 560px;
    width: 960px; 
    display: flex;
    box-shadow: 5px 10px 35px #7e7e7e;
    background: #fff;
    z-index: 99999;
    position: fixed; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); 
    visibility: hidden;
`;
 
export const SideA = styled.div`
    width: 52%; 

    #grid{
        margin-top: -40px;
        margin-left: 32px;
    }
`;
 
export const TitleSectionPopUp = styled.p`
    width: 230px;
    font-size: 18px;
    color: #0075B1;    
    padding: 32px 0 5px 52px; 
`;
 
export const TitleProjectPopUp = styled.p`
    width: 500px;
    color: #000000;
    font-size: 22px;
    padding-left: 52px;
    font-weight: bold;
    height: 20px;
`;
 
export const TitlePopUp = styled.div`
    width: 500px;
    margin-left: 50px;
    margin-top: 40px;
    font-weight: 500;
    color: #023A67;
`;
 
export const Responsible = styled.div`
    width: 565px;
    padding-left: 50px;
    margin: 25px 0 0 20px;
    font-size: 11px;
    margin-bottom: 10px;
    font-weight: 500;
`;
 
export const Objective = styled.div`
    padding:75px 0 40px 50px;
 
    p:nth-child(1){
        font-size: 14px;
    }

    p:nth-child(2){
        font-size: 14px;
        max-width: 600px;
        max-height: 135px;
        color: #000000;
        margin-top: 18px;
        overflow-y: scroll;
    }
`;
 
export const SideB = styled.div`
    width: 48%;
    margin: 105px 0 0 75px;
 
    #x{
        position: absolute;
        right: 35px;
        top: 35px;
        font-size: 30px;
    }
    
`;
 
export const TitleHours = styled.div`
    width: 450px;
    margin-top: 10px;
    font-weight: 500;
    color: #023A67;    
`;
 
export const HoursAppointment = styled.div`
    line-height:100px;
    height: 135px;
    width: 455px;
    margin-top: -10px;
`;
 
export const Graphic = styled.div`
    width:130px;
    height:130px;
    display: inline-block;
    margin-left: -32px;
`;
 
export const HoursPopUp = styled.div`
    width:270px;
    height: 150px;
    font-size:12px;
    float:right;
    margin-top: 7px;
 
    p{
        width: 125px;
        display: flex;
        justify-content: space-between;
        height:50px;
    }

    span {
        font-size: 12px;
        color: #7E7E7E;
    }
`;
 
export const Table = styled.div`
    width: 68%;
    height: 35%;
 
    table {
        border-collapse: collapse;
        width: 100%;
        text-align: center;

        thead {
            background: #0075B1;
            color: #fff;
            height: 40px;
            display: inline-flex;
            width:100%;
            font-size: 14px;
            margin-bottom: 15px;

            tr{
                margin-top: 5px;
                color: #fff;

                td:nth-child(1){
                    width: 500px;
                }

                td:nth-child(2){
                    width: 200px;
                }
            }
        }

        tbody {
            height: 65px;
            overflow-y: scroll;
            display: block;
            border: 1px solid #e2e2e280;

            tr {
                font-size: 14px;
                height: 40px;
                margin:15px;
                color: rgba(0, 0, 0, 0.87);
                border: 1px solid #e2e2e280;  
            }

            td {
                width: 570px;
            }
        }
    }
`;
 
 
export const StatusPopUp = styled.div`
    display: flex;
    flex-direction: column;
 
    #btn{
        height: 37px;
        width: 68%;
        margin-top: -5px;
        background-color: #28B9DA;
        font-size: 16px; 
        color: #FFFFFF;
        border: none;
    }
    
    span{
        margin-top: 48px;
        font-size: 22px;
        margin-right: 15px;
        font-weight: bold;
        color: #EBB93A;
        text-align: center;
    }
`;
 
 
export const SideC = styled.div`
    display: none;
`;
 
export const TableConsultor = styled.div`
    width:100%;
    height:100%;
    margin-top: 17px;
 
    table {
        border-collapse: collapse;
        text-align: center;
        width: 90%;

        thead {
            background: #0075B1;
            height: 40px;
            display: inline-flex;
            width: 100%;
            text-transform: uppercase;
            font-size: 14px;
            margin-bottom: 15px;

            tr {
                font-size: 14px;
                height: 40px;
                width:100%;
                padding:12px;
                color: rgba(0, 0, 0, 0.87);

            }

            td {
                color:#fff;
                width: 20%;
            }
        }
        
        tbody {
            height: 277px;
            overflow-y: auto;
            display: block;
            border: 1px solid #e2e2e280;

            tr {
                font-size: 14px;
                width: 100%;
                color: rgba(0, 0, 0, 0.87);
                border: 1px solid #e2e2e280;
            }
            td:nth-child(1) {
                padding: 15px;
                width: 20%;
                border-right: 1px solid #e2e2e280;
            }
            td:nth-child(2) {
                max-width: 70%;
                border-right: 1px solid #e2e2e280;
            }
        }
    }
`;