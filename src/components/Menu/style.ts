import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position : fixed;
    right:0px;
    top: 290px;
    height: 190px;
    width: 150px;
    margin: 0px;
    z-index:999;

    a:nth-child(1) {
        top:0px;
        div {
            background: #00579D;
        }
    }
    a:nth-child(2) {
        top:60px;
        div {
            background: #0075B1;
        }
    }
    a:nth-child(3) {
        top:120px;
        div {
            background: #2382BA;
        }
    }
    a {
        color: #fff;
        text-decoration: none;
        font-size: 8px;
        position: relative;
        position: absolute;
        right: -110px;
        div {
            height: 50px;
            width: 170px;
            margin: 5%;
            
            display: flex;
            align-items: center;
            padding: 5%;
            img {
                height: 35px;
                width: 35px;
                background-size: cover;
            }
            h1 {
                margin: 0% 10%;
            }
        }
        &:hover {
            right: 0;
            transition: 0.5s;
        }
    }
`;