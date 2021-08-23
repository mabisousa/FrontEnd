import styled from "styled-components";
import Input from "../../components/Input";

export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    width:100%;
    height:85vh;
    padding: 1% 8% 1% 8%;
`;

export const Infos = styled.div`
    height: 45vh;
    width: 30vw;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 2%;

    form {
        margin:2px 0;
        
        .inputs {
            display: flex;
            justify-content: space-evenly;

            div:nth-child(1) {
                width:30%;
            }
            div:nth-child(2) {
                width:70%;
                margin-left:2%;
            }
        }
        h1 {
            font-size:16px;
            font-weight:500;
            margin:10px 0;
        }
    }  
`;
export const Count = styled.div`
    height: 40vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    h1 {
        font-size: 18px;
    }
    div {
        margin: 5% 0 0 0;

        .hold {
            display: flex;
            flex-direction: row;
            align-items:center;
            margin:10px 0;

            .numbers {
                margin: 0 20px 0px 0px;
                width: 40px;
                height: 40px;
                border: 1px solid black;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            p {
                font-size: 14px;
            }
        }
        .hold:nth-child(1) {
            .numbers {
                p {
                    font-size: 18px;
                    color: #7E7E7E90;
                }
            }
        }
        .hold:nth-child(2) {
            .numbers {
                p {
                    font-size: 18px;
                    color: #13B77C;
                }
            }
        }
        .hold:nth-child(3) {
            .numbers {
                p {
                    font-size: 18px;
                    color: #AC341A;
                }
            }
        }
    }
    button {
        border: 0;
        width: 100%;
        height: 50px;
        color: #fff;
        background: #28B9DA;
    }
    #description {
        width: 115%;
        height: 100%;
        padding: 15px;
        border: 1px solid #e2e2e2;  
        background: #fff;
        position: absolute;
        display: none;

        h1 {
            font-size: 16px;
            width: 100%;
            height: 30px;
            border-bottom: 2px solid #28B9DA;
        }
        p {
            padding: 5px;
            font-size: 14px;
        }

        &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 7.5px;
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-right: 15px solid #28B9DA;
        }
    }
`;
export const Apontamentos = styled.div`

    max-height: 350px;

    .MuiDataGrid-root {
        border: 1px solid #e2e2e2;
        border-radius:0px;
    }

    .MuiButtonBase-root  {
        color: #e2e2e2;
        display: block;
    }
    .MuiDataGrid-footerContainer{
        display: none;
    }
    .MuiDataGrid-menuIcon {
        display: none;
    }
    .MuiDataGrid-sortIcon {
        display: none;
    }
    .MuiDataGrid-columnHeaderWrapper{
        background: #0075B1;
        color: #fff;
    }
    .MuiDataGrid-columnSeparator{
        display: none;
    }
    .MuiDataGrid-cell{
        border-bottom: 1px solid #7E7E7E;
    }
    .MuiSvgIcon-fontSizeSmall {
        display: none;
    }
`;

export const Filters = styled.div`
    width: 95%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 6rem 0rem 0rem 4rem;
`;

export const Title = styled.h1`
    font-weight:normal;
    font-size: 20px;
    text-decoration: underline #0075B1;
    margin-left: 50px;
    width: 300px;
`;

export const ProgressBar = styled.div`

    height:120px;
    width:55vw;
    
    .headers {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center; 
        padding: 0px 11%;

        p {
            width:100px;
            height: 50px;
            font-weight: bold;
            color: #00579D;
        }
    }
    .steps {

        position: relative;
        display:flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 2px;
        color: #fff;

        .step {
            width: 60px;
            height: 60px;
            background: #8B8787;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            &::before {
                z-index: -2;
                content: ' ';
                position: absolute;
                top: 45%;
                width:25%;
                height: 5px;
                background: #8B8787;
            }
            img {
                height: 20px;
                width: 20px;
            }
        }
        .active {
            background: #448DCA;
            transition: 1s;

            &::before {
                z-index: -2;
                content: ' ';
                position: absolute;
                top: 45%;
                width:25%;
                height: 5px;
                background: #448DCA;
                transition: 1s;

            }
        }
    }
`;
