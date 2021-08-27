import styled from 'styled-components';

export const Main = styled.main`

    height: 200px;
    width: 500px;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 10px 35px #7e7e7e;

    position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    div{
        
        height: 120px;
        width: 330px;
        position: absolute; 
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);


        button:nth-child(2) {
            width: 90px;
            height: 45px;
            background: #96CBE2;
            border: none;
            color: #fff;
            font-weight: 500;
            margin: 45px 50px 0 30px;
        }

        button:nth-child(3) {
            width: 90px;
            height: 45px;
            background: #28B9DA;
            border: none;
            color: #fff;
            font-weight: 500;
        }
    

    }   

`;

export const Container = styled.main`
    height: 330px;
    width: 500px;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 10px 35px #7e7e7e;

    position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

        .container{
            
            height: 260px;
            width: 415px;
            position: absolute; 
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

                div{

                    display: flex;
                    align-items: center;

                    p{  
                        width: 90%;
                        text-align: center;
                    }

                    svg{
                    width: 30px;
                    height: 30px;
                    margin-left: -8px;
                    }

                }

                textarea{
                font-size: 14px;
                width: 100%;
                height: 65%;
                color: #000000;
                margin-top: 18px;
                overflow-y: auto;
                border: 1px solid #7e7e7e;
                background: #F5F5F5;
                padding: 10px;
                resize: none;
                }


                button{
                    width: 90px;
                    height: 45px;
                    background: #28B9DA;
                    border: none;
                    color: #fff;
                    font-weight: 500;
                    margin: 15px 50px 0 30px;
                    position: absolute; 
                    left: 45%;
                    top: 85%;
                    transform: translate(-55%, -15%);
                }

        

        }


`;