import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 90%;
    margin-left: 89.6px;
    margin-top: 48px;

    @media (max-width: 425px){
        width: 100%;
    }
`

interface cardProps {
    color?: string,
    Show: boolean;
}

export const Card = styled.a<cardProps>`
    background-color: #FFFFFF;
    cursor: pointer;

    box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
    margin: 1rem;
    float: left;

    
    ${(props) => props.color === "ANDAMENTO" &&
        css`
            border-left:  15px solid #EBB93A;
        `}

    ${(props) => props.color === "CONCLUÍDO" && 
        css`
            border-left:  15px solid #6AACDA;
        `}

    ${(props) => props.color === "ATRASADO" &&
        css`
            border-left:  15px solid #AC341A;
        `}

    
    ${(props) => props.Show ? 
        css` 
            width: 30%;
            height : 200px;
        `: css`
            width:45%; 
            height: 150px;

        @media (max-width: 1024px) and (min-width: 769px) {
            margin: .6rem;
        }
        
        @media (max-width: 768px){
            width: 40%;
            margin: 1rem .6rem 1rem 1.6rem;
        }
    `}

    @media (max-width: 425px){
        width: 90%;
    }

    @media (max-width: 768px){
        width: 43%;
        margin: 1rem .6rem 1rem 1rem;
    }
`;

export const TitleSection = styled.p<cardProps>`
    width: 200px;
    color: #0075B1;
    margin-top: 1rem;
    margin-left: 2rem;

    @media (max-width: 1024px) and (min-width: 426px) {
        font-size: 13px;
    }
    
    @media (max-width: 425px){
        font-size: 80%;
    }

    ${(props) => props.Show ? 
        css` 
            font-size: 14px;
        `: css`
            font-size: 12px;
    `}
`;

export const TitleProject = styled.p<cardProps>`
    color: #000000;
    margin-left: 2rem;

    @media (max-width: 1024px) and (min-width: 769px) {
        font-size: 15px;
        width: 350px;
    }
    
    @media (max-width: 768px) and (min-width: 426px) {
        font-size: 12px;
        width: 245px; 
    }

    @media (max-width: 425px){
        font-size: 100%;
    }

    ${(props) => props.Show ? 
        css` 
            width: 315px;
            font-size: 16px;
            margin-top: 1rem; 
        `: css`
            width: 500px;
            font-size: 18px;
            margin-top: 0;

        @media (max-width: 768px){
            width: 200px;
            margin-top: 5px;
        }

        @media (max-width: 1024px) and (min-width: 769px) {
            width: 220px;
            font-size: 14px;
            margin-top: 10px;
        }
    `}
`;

export const HoldHours = styled.div<cardProps>`
    width:200px;
    height:40px;
    float: left;

    @media (max-width: 425px){
        margin-left: 2rem;
        width: 150px;
    }

    @media (max-width: 768px){
        margin-left: 1rem;
        width: 130px;
    }

    ${(props) => props.Show ? 
        css` 
            margin-left: 7px;
            margin-top: 1rem; 
        `: css`
            margin-left: 2rem;
            margin-top: 7px;
            
        @media (max-width: 1024px) and (min-width: 769px){
            margin-left: 1rem;
            width: 140px;
            margin-top: 10px;
        }

        @media (max-width: 768px){
            width: 130px;
        }
    `}
`;

export const Hours = styled.div<cardProps>`
    height:20px;
    margin-left: 15%;
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
    
    ${(props) => props.Show ? 
        css` 
            width: 155px;
            font-size:11px; 
        `: css`
            width:200px;
            font-size: 12px;
              
        @media (max-width: 1024px) and (min-width: 769px){
            width: 100px;
                p{
                    font-size: 12px;
                } 
        }
    `}

    @media (max-width: 768px){
        margin-left: 1rem;
        width: 100px;
            p{
                font-size: 12px;
            } 
    }

    @media (max-width: 1024px) and (min-width: 769px){
        margin-left: 1rem;
        width: 150px;
    }
`;

export const Status = styled.div<cardProps>`
    width:120px;
    float:right;
    text-align: center;

    p:nth-child(1){
        font-weight: regular;
        font-size: 15px;
    }

    p:nth-child(2){
        font-weight: bold;
        font-size: 17px;
    }

    ${(props) => props.Show ? 
        css` 
            margin-top: 17px;
            margin-right: 16px;
            height:60px;
            
            p:nth-child(1){
                font-size: 14px;
            }

            p:nth-child(2){
                font-size: 16px;
            }
        `: css`
            margin-top: 7px;
            margin-right: 32px;
            height:60px;

            p:nth-child(1){
                font-size: 15px;
            }

            p:nth-child(2){
                font-size: 17px;
            }
            
        @media (max-width: 768px) {
            margin: 5px 0 5px 0;
            
        }

        @media (max-width: 1024px) and (min-width: 769px) {
            margin: 5px 0 0 0;
        }
    `}

    @media (max-width: 1024px) and (min-width: 769px) {
        margin-right: 25px;
        height: 45px;
        
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
        height:60px;

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

export const Date = styled.div<cardProps>`
    height:15px;
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;
    

    p {
        color: #7E7E7E;
        float: left;
        font-size: 12px;
    }

    ${(props) => props.Show ? 
        css` 
            width: 300px;

            @media (max-width: 1024px){
            width: 250px;
            margin-top: 5px;
        }
        `: css`
            width: 465px;

        @media (max-width: 1024px){
            width: 200px;
            margin-top: 5px;
        }
    `}

    @media (max-width: 768px) and (min-width: 426px) {
        width: 215px;
        
    }
`;