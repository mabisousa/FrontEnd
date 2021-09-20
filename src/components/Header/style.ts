import styled, { css } from "styled-components";

interface dropdownProps {
    ShowDropdown: boolean;
}

export const Container = styled.div<dropdownProps>`
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

        div{

            width: 100px;
            display: flex;
            flex-direction: row;

            img{
                height: 30px;
                width: 30px;
                cursor: pointer;
                margin-right: 7px;
            }

            #sair {
                font-size: 14px;
                width: 40px;
                color: #00579D;
                cursor: pointer;
                border-left: 1.5px solid #00579D;
                text-align: center;
                margin-top: 7px;
            }

        }

        #dropdown{
            position: absolute;
            right: 57px;
            min-height: 20px;
            top: 29px;
            border: solid 1px #CBCBCB;
            border-bottom: 0;
            color: #7E7E7E;
            cursor: pointer;
            width: 180px;
            background-color: #FFF;

            ${(props) => props.ShowDropdown ?
                css`
                    display: none;
                `: css`
                    display: block;
                `}

            div{ 
                width: 100%;
                border-bottom: solid 1px  #CBCBCB;
                display: flex;
                align-items: center;

                p{
                    font-size: 12px;
                    height: 20px;
                    font-size: 14px;

                }

                img{
                    height: 30px;
                    width: 30px;
                    cursor: pointer;
                    margin-left: 8px;
                }

            }

           
        }
    }
`;