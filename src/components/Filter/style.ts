import styled, { css } from 'styled-components';

interface dropdownProps {
    ShowDropdown: boolean;
    ShowArrow: boolean;
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

        svg{
            float: right;
        }

        div{
            width: 150px;
            position: relative;
            left: -1px;
            border: solid 1px  #7E7E7E;
            color: #7E7E7E;
            background: #fff;
            overflow-y: scroll;
            height: 50px;


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
        
        #arrowDown{
            float: right;
            display: block;

            ${(props) => props.ShowArrow ?
                css`
                    display: block;
                `: css`
                    display: none;
                `}
        }

        #arrowLeft{
            float: right;
            display: none;

            ${(props) => props.ShowArrow ?
                css`
                    display: none;
                `: css`
                    display: block;
                `}
        }

       
        
    }
`;