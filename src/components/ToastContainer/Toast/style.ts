import styled, { css } from "styled-components";
import { animated } from "react-spring";

interface ToastProps {
    type?: "success" | "error" | "info";
    hasDescription: boolean;
}

const toastTypeVariantions = {
    success: css`
        background: #fff;
        color: #2e656a;
        border: 1px solid  #2e656a;
        box-shadow: 0 0 50px 10px #00000020;
    `,
    info: css`
        background: #fff;
        color: #3172b7;
        border: 1px solid  #3172b7;
        box-shadow: 0 0 50px 10px #00000020;
    `,
    error: css`
        background: #fff;
        color: #c53030;
        border: 1px solid  #c53030;
        box-shadow: 0 0 50px 10px #00000020;
    `
};

export const Container = styled(animated.div)<ToastProps>`
    width: 360px;
    position: relative;
    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0 0 0 0.2);
    background: #fddede;
    color: #f53030;
    display: flex;

    & + div{
        margin-top: 8px;
    }

    ${(props) => toastTypeVariantions[props.type || 'info']}

    > svg {
        margin-top: 4px 12px 0 0;
    }

    div{
        flex: 1;
        margin-left: 10px;
        p{
            margin-top: 4px;
            font-size: 14px;
            opacity: 0.8;
            line-height: 20px;
        }
    }

    button{
        position: absolute;
        right: 16px;
        top: 16px;
        opacity: 0.6;
        background: transparent;
        border: 0;
        color: inherit;
    }

    ${props => !props.hasDescription && css`
        align-items: center;   
        svg {
            margin-top: 0;
        }
    `}
`;