import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height: 90px;
    border-bottom: 2px solid #90C0E3;  
    display: flex;
    flex-direction: row;
    align-items: center;
    #projetos{
    height: 70px;
    width:240px;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
        img{
        height: 90px;
        width: 90px;
        cursor: pointer;
        background-size: 100% 100%;
        }
        p{
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        color: #00579D;
        font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    }
    #flagExit{
    width: 115px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 25px;
    top: 10px;
        img{
        height: 40px;
        width: 40px;
        cursor: pointer;
        }
        
        p{
        font-weight: normal;
        font-size: 18px;
        height: 30px;
        width: 60px;
        color: #00579D;
        cursor: pointer;
        border-left: 1.5px solid #00579D;
        align-items: center;
        display: flex;
        justify-content: center;
        }
    }
`;

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



export const Cards = styled.div`
    width: 90%;
    height: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-left: 5.6rem;
    #cards{
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    
    #card {
    background-color: #FFFFFF;
    width: 30%;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
    height: 200px;
    margin: 1rem;
    float: left;
    color: black;
    
        #barStatus{
        background-color: #EBB93A;
        height: 200px;
        width: 13px;
        box-shadow: 0 5px 5px rgb(0 0 0 / 0.2);
        position: absolute;
        }
        #secao{
        width: 200px;
        font-size: 12px;
        color: #0075B1;
        margin-top: 1rem;
        margin-left: 2rem;
        }
        #title {
        width: 400px;
        color: #000000;
        font-size: 16px;
        margin-top: 1rem;
        margin-left: 2rem;
        }
        #hold_hours {
        width:200px;
        height:40px;
        float: left;
        margin-top: 1rem;
        margin-left: 1rem;
      
            #hours {
            width:150px;
            height:20px;
            margin-left: 15%;
            display: flex;
            justify-content: space-between;
            font-size:11px;
            
                #info {
                margin-top: 2px;
                font-size: 11px;
                }
            } 
        }
        
        #dates {
        width:282px;
        height:15px;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        margin-left: 3rem;
            p {
            color: #7E7E7E;
            float: left;
            font-size: 12px;
            }
        }
        #situation {
        width:120px;
        height:60px;
        float:right;
        margin-top: 1rem;
        margin-right: 1rem;
            #status {
            height: 60px;
            width:110px;
            text-align: center;
            }
            div p:nth-child(1){
            font-weight: regular;
            font-size: 13px;
            cursor: pointer;
            }
            div p:nth-child(2){
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
            }
        }

        #bar{
            height: 15px;
            width: 200px;
            background: #C4C4C4;
            margin-top: 5px;
            margin-left: 130px;

            #progress{
                height: 15px;
                width: 100px;
                background: #4DA9DD;

            }
        }

    }
}
    
`;

export const Profile = styled.div`
        width: 250px;
        height: 550px;
        background: #fff;
        position: fixed;
        top: 15%;
        left: -180px;
        padding: 10px;
        border: 1px solid #00579D;
        border-radius:00px 20px 20px 0px;
        box-shadow: 0px 0px 5px 2px #e2e2e280;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        transition: 1s;
        z-index: 10;

        div {
            width: 50px;
            height: 99%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            transition: 1s;

            &::after {
                content: "";
                position: absolute;
                top: 45%;
                right: -15px;   
                border-top: 15px solid transparent;
                border-bottom: 15px solid transparent;
                border-left: 15px solid #014C88;
            }

            &::before {
                content: "";
                position: absolute;
                top: 45%;
                right: -13px;  
                border-top: 15px solid transparent;
                border-bottom: 15px solid transparent;
                border-left: 15px solid #fff;
                z-index: 2; 
            }

            #perfil {
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: center;

                #txt {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    
                    width: 0;
                    height: 30px;
                    overflow: hidden;
                    transition: 1s;

                    h2 {
                        font-size: 14px;
                    }

                    p {
                        font-size: 12px;
                    }
                }

                #profile {
                    height: 40px;
                    width: 40px;
                    transition: 1s;
                }

                #notificationsImg{
                    margin-top: 8px;
                    height: 30px;
                    width: 30px;
                    transition: 0.5s;
                }
            }

            #notifications {
                max-height: 70%;
                min-height: 60%;
                width: 0;
                justify-content: start;
                overflow: hidden;

                h3 { 
                    border-bottom: 2px solid #44D032;
                    margin-bottom: 10px;
                }

                .hold {
                    height: 80%;
                    width: 100%;
                    border-left: 1px solid #e2e2e2;
                    padding:0 5%;
                    overflow-y: scroll;

                    .notification {
                        min-height: 50px;
                        width: 100%;
                        margin:5px 0px;
                        border: 1px solid #e2e2e2;
                        box-shadow: 0px 5px 7px 0px #e2e2e2;
                    }

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            }
        }
        &:hover {
            left: 0;
            
            div {
                width: 230px;

                #perfil {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: start;

                    #profile {
                        height: 130px;
                        width: 130px;
                        margin: 5% 17%;
                        transition: 1s;
                    }

                    #notificationsImg{
                        display: none;
                    }

                    #txt {
                        width: 100%;
                        height: auto;
                        transition: 2s;
                    }
                }
                
                #notifications {
                    width: 100%;
                    padding: 15px;
                    transition: 1s;
                }
            }
        }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    position : fixed;
    right:0px;
    top: 290px;
    height: 190px;
    width: 150px;
    margin: 0px;
    
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
            #img {
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