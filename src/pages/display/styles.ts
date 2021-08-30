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
    cursor: pointer;
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

export const Container = styled.div`
    height: 560px;
    width: 960px; 
    display: flex;
    flex-direction: row;
    box-shadow: 5px 10px 35px #7e7e7e;
    background: #fff;
    z-index: 99999;
    position: absolute; 
    z-index: 99999;
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
    padding-left: 50px;
    display: flex;
    margin-top: 40px;
 
    p{
        font-weight: 500;
        color: #023A67;
    }
`;
 
export const Responsible = styled.div`
    width: 565px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    margin: 25px 0 0 20px;
 
    p{
        font-size: 11px;
        margin-bottom: 10px;
        font-weight: 500;
    }
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
        overflow-y: auto;

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
    display: flex;
    margin-top: 10px;
 
    p{
        font-weight: 500;
        color: #023A67;
    }
`;
 
export const HoursAppointment = styled.div`
    margin-top: 23px;
    line-height:100px;
    height: 135px;
    width: 455px;
    margin-top: -10px;
`;
 
export const Graphic = styled.div`
    width:130px;
    height:130px;
    display: inline-block;
    border-radius: 50%;
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
    margin-right: 15px;
    margin-bottom: 0;
 
 
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
            text-transform: uppercase;
            font-size: 14px;
            margin-bottom: 15px;

            tr{
                margin-top: 5px;
                border: none;
                color: #fff;

                    td:nth-child(1){
                        width: 500px;
                        border: none;
                    }

                    td:nth-child(2){
                        width: 200px;
                        border: none;
                    }
            }
        }

        tbody {
            height: 65px;
            overflow-y: scroll;
            overflow-x: hidden;
            display: block;
            border: 1px solid #e2e2e280;

            tr {
                font-size: 14px;
                letter-spacing: 0.01071em;
                height: 40px;
                margin:15px;
                color: rgba(0, 0, 0, 0.87);
                border: 1px solid #e2e2e280;
                    
            }

            td {
                width: 570px;
                border-right: 1px solid #e2e2e280;
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
                letter-spacing: 0.01071em;
                height: 40px;
                width:100%;
                padding:12px;
                color: rgba(0, 0, 0, 0.87);

            }
            td {
            color:#fff;
            border: none;
            width:20%;
            }
        }
        
        tbody {
            height: 277px;
            overflow-y: scroll;
            overflow-x: hidden;
            display: block;
            border: 1px solid #e2e2e280;

            tr {
                font-size: 14px;
                letter-spacing: 0.01071em;
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