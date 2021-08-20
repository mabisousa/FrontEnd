import styled from "styled-components";

export const Filters = styled.div`
    width: 95%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 4rem 0 0 4rem;

    div{
        width: 90%;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    #filter{
        width: 90%;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 3rem;
        margin-bottom: 3rem;

        p{
            color: #7E7E7E;
            font-size: 20px;
            text-align: center;
        }

        div{
            width: 150px;
            height: 20px;
            border: solid 1px  #7E7E7E;
            color:#7E7E7E;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
            display: block;

            span{
                font-size: 14px;
            }
        }
    }
    #img{
        float: right;
    }
`;

export const Title = styled.h1`
    font-weight:normal;
    font-size: 20px;
    text-decoration: underline #0075B1;
    margin-left: 50px;
    width: 300px;
`;

export const Form = styled.form`
    width: 280px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    label {
        color: #7E7E7E;
        font-size: 20px;
        text-align: center;
    }
    
`;