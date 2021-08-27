import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 12vh;
    background: #fff;
    border-bottom: 2px solid #90C0E3;  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    #name{
        width:220px;
        display: flex;
        align-items: center;

        img{
            margin:0 30px;
            height: 70px;
            cursor: pointer;
        }
        p {
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
            color: #00579D;
        }
    }

    #flagExit{
        width: 80px;
        height: 30px;
        margin: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        img{
            height: 30px;
            width: 30px;
            cursor: pointer;
        }
        p {
                font-size: 14px;
                width: 40px;
                color: #00579D;
                cursor: pointer;
                border-left: 1.5px solid #00579D;
                text-align: center;
        }
    }
`;