import styled from 'styled-components';

export const Title = styled.h1`
    font-weight:normal;
    font-size: 20px;
    text-decoration: underline #0075B1;
    margin-left: 50px;
    width: 300px;
    margin: 6rem 0rem 0rem 4rem;
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

    button{
        border: none;
        background: transparent;
    }
    
    #card {
    background-color: #FFFFFF;
    width: 45%;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
    height: 150px;
    margin: 1rem;
    float: left;
    color: black;

        #barStatus{
        background-color: #EBB93A;
        height: 150px;
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
        width: 500px;
        color: #000000;
        font-size: 18px;
        margin-left: 2rem;
        }
        #hold_hours {
        width:200px;
        height:40px;
        float: left;
        margin-top: 7px;
        margin-left: 2rem;
      
            #hours {
            width:200px;
            height:20px;
            margin-left: 15%;
            display: flex;
            justify-content: space-between;
            font-size:11px;
            
                info {
                margin-top: 2px; /* ------------------ */
                font-size: 10px;
                }
            } 
        }
        
        #dates {
        width:300px;
        height:15px;
        display: flex;
        justify-content: space-between;
        margin-top: 4rem;
        margin-left: 2rem;
            p {
            color: #7E7E7E;
            float: left;
            font-size: 12px;
            }
        }
        #situation {
        width:120px;
        height:80px;
        float:right;
        margin-right: 1rem;
        margin-top: 10px;

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
    }
}
    
`;

export const Container = styled.div`
    #popup{
        height: 560px;
        width: 960px; 
        display: flex;
        flex-direction: row;
        box-shadow: 5px 10px 35px #7e7e7e;
        background: #fff;

        position: fixed; 
        z-index: 9999;
        box-shadow: 0px 0px 100px 500px #7f7f7f60;
        display: none;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    
        #sideA{
            width: 52%;

            #secao{
                width: 230px;
                font-size: 18px;
                color: #0075B1;    
                padding: 32px 0 5px 52px; 

            }

            #title{
                width: 500px;
                color: #000000;
                font-size: 22px;
                padding-left: 52px;
                font-weight: bold;
                height: 20px;
            }

            #titles{
                width: 500px;
                padding-left: 50px;
                display: flex;
                margin-top: 25px;

                p{
                    font-weight: 500;
                    color: #023A67;
                }
            }

            #responsible{
                width: 565px;
                padding-left: 50px;
                display: flex;
                flex-direction: column;
                margin: 25px 0 0 20px;

                p{
                    font-size: 11px;
                    margin-bottom: 10px;
                    font-weight: 500;
                }
            }

            #objetivo{

                padding:75px 0 40px 50px;

                p:nth-child(1){
                    font-size: 14px;
                }

                p:nth-child(2){
                    font-size: 14px;
                    max-width: 600px;
                    max-height: 140px;
                    color: #000000;
                    margin-top: 18px;
                    overflow-y: auto;

                }
            }

            #grid{
                display: flex;
                flex-direction: row;
                margin-left: 52px;
                margin-top: 5px;
            }

            .box{
                width: 50px;
                height: 35px;
                margin: 0 5px 5px 0;
            }

            .one{
                background: #B4DDFB;
            }

            .two{
                background: #90C0E3;
            }

            .three{
                background: #448DCA;
            }

            .four{
                background: #2E5CA6;
            }

            .five{
                background: #023A67;
            }  
        }

        #sideB{
            width: 48%;
            margin: 105px 0 0 75px;

            #x{
                position: absolute;
                right: 35px;
                top: 35px;
                font-size: 30px;
            }

            #titles{
                width: 450px;
                display: flex;

                p{
                    font-weight: 500;
                    color: #023A67;
                }
            }

            #hoursAppointment{
                margin-top: 23px;
                line-height:100px;
                height: 135px;
                width: 455px;
                margin-top: -10px;

                #graphic{
                    width:130px;
                    height:130px;
                    display: inline-block;
                    border-radius: 50%;
                    margin-left: -32px;
                } 

                #hours {
                    width:270px;
                    height: 150px;
                    font-size:12px;
                    float:right;
                    margin-top: 7px;

                    #title{
                        width: 125px;
                        display: flex;
                        justify-content: space-between;
                        height:50px;
                    }

                    #info {
                        font-size: 12px;
                        color: #7E7E7E;
                    }
                } 

            }

            #table{
                width: 68%;
                height: 35%;
                margin-right: 15px;
                margin-bottom: 0;

                #header1{
                    width: 500px;
                    border: none;
                }
                #header2{
                    width: 200px;
                    border: none;
                }
            }

            table {
                border-collapse: collapse;
                width: 100%;
                text-align: center;

                thead {
                    background: #0075B1;
                    color: #fff;
                    height: 40px;
                    display: inline-flex;
                    width:100%;
                    text-transform: uppercase;
                    font-size: 14px;
                    margin-bottom: 15px;

                    tr{
                        margin-top: 5px;
                        border: none;
                        color: #fff;
                    }
                }

                tbody {
                    height: 65px;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    display: block;
                    border: 1px solid #e2e2e280;

                    tr {
                        font-size: 14px;
                        letter-spacing: 0.01071em;
                        height: 40px;
                        margin:15px;
                        color: rgba(0, 0, 0, 0.87);
                        border: 1px solid #e2e2e280;
                    }
        
                    td {
                        width: 570px;
                        border-right: 1px solid #e2e2e280;
                    }
                }
            }

            #status{
                display: flex;
                flex-direction: column;

                #btn{
                    height: 37px;
                    width: 68%;
                    margin-top: -5px;
                    background-color: #28B9DA;
                    font-size: 16px; 
                    color: #FFFFFF;
                    border: none;
                }
                span{
                    margin-top: 48px;
                    font-size: 22px;
                    margin-right: 15px;
                    font-weight: bold;
                    color: #EBB93A;
                    text-align: center;
                }
            }

            
        } 
        #sideC {
            display: none;

            #tabela {
                width:100%;
                height:100%;

                table {
                    border-collapse: collapse;
                    text-align: center;
                    width: 90%;
                
                    thead {
                        background: #0075B1;
                        height: 40px;
                        display: inline-flex;
                        width: 100%;
                        text-transform: uppercase;
                        font-size: 14px;
                        margin-bottom: 15px;

                        tr {
                            font-size: 14px;
                            letter-spacing: 0.01071em;
                            height: 40px;
                            width:100%;
                            padding:12px;
                            color: rgba(0, 0, 0, 0.87);

                        }
                        td {
                        color:#fff;
                        border: none;
                        width:20%;
                        }
                    }
                    
                    tbody {
                        height: 287px;
                        overflow-y: scroll;
                        overflow-x: hidden;
                        display: block;
                        border: 1px solid #e2e2e280;

                        tr {
                            font-size: 14px;
                            letter-spacing: 0.01071em;
                            width: 100%;
                            color: rgba(0, 0, 0, 0.87);
                            border: 1px solid #e2e2e280;
                        }
                        td:nth-child(1) {
                            padding: 15px;
                            width: 20%;
                            border-right: 1px solid #e2e2e280;
                        }
                        td:nth-child(2) {
                            max-width: 70%;
                            border-right: 1px solid #e2e2e280;
                        }
                    }
                }
            }
        }
    }
`;