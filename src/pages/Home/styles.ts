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