
import styled, { css } from 'styled-components';

interface dropdownProps {
    ShowDropdown: boolean;
}
export const Filter = styled.div<dropdownProps>`


    #dropdown{
        width: 150px;
        height: 20px;
        border: solid 1px  #7E7E7E;
        color:#7E7E7E;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        display: block;

        span{
            font-size: 15px;
        }

        div{
            position: relative;
            top: 0;
            left: -1px;
            width: 150px;
            min-height: 20px;
            text-align: center;
            border: solid 1px  #7E7E7E;
            border-top: 0;
            color:#7E7E7E;
            overflow-y: auto;

            ${(props) => props.ShowDropdown ?
                css`
                    display: none;
                `: css`
                    display: block;
                `}

            p{
                font-size: 15px;
                border-bottom: solid 1px  #7E7E7E;
                height: 20px;
                padding-top:1%;
            }
        }
    }

   

`;