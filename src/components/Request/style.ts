import styled, { css } from 'styled-components';

interface RequestProps {
    confirm: boolean;
}
export const Main = styled.main<RequestProps>`
    width: 500px;
    padding: 3% 2% 0% 2%;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
    visibility: hidden;
    box-shadow: 0px 5px 27px 10px #e2e2e2;    

    button {
        width: 90px;
        height: 45px;
        border: none;
        color: #fff;
        background: #28B9DA;
    }   
        
    svg{
        width: 30px;
        height: 30px;
        margin-left: -8px;
        cursor: pointer;
    }
    textarea{
        font-size: 14px;
        width: 100%;
        height: 55%;
        overflow-y: auto;
        border: 1px solid #7e7e7e;
        background: #F5F5F5;
        padding: 10px;
        resize: none;
        margin: 18px 0px 18px 0px;
    }

    ${(props) => !props.confirm ? 
    css`
    height: 200px;
    
    div {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        button:nth-child(1) {
            background: #96CBE2;
        }
        button:nth-child(2) {
            background: #28B9DA;
        }
    }
    ` : css`
    height: 300px;

    div {
        width: 100%;
        height: 5%;
        display: flex;
        align-items: center;

        p {
            margin-left: 28%;
        }
    }
    `}

`