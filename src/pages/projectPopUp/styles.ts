import styled from 'styled-components';

export const Container = styled.div`
    #container{
        height: 560px;
        width: 960px; 
        display: flex;
        flex-direction: row;
        box-shadow: 5px 10px 35px #7e7e7e;

        position: absolute; 
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
                    max-height: 138px;
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
            }

            thead {
                background: #0075B1;
                color: #fff;
                height: 40px;
                display: inline-flex;
                width:100%;
                text-transform: uppercase;
                font-size: 14px;
                margin-bottom: 15px;
            }

            thead tr{
                margin-top: 5px;
                border: none;
                color: #fff;
            }

            tbody {
                height: 65px;
                overflow-y: scroll;
                overflow-x: hidden;
                display: block;
                border: 1px solid #e2e2e280;
            }

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

            #status{
                display: flex;
                flex-direction: column;

                #btn{
                    height: 35px;
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
        #sideC{
            display: none;
        }
    }
`;

