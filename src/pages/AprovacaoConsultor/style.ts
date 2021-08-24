import styled from "styled-components";

export const Popup = styled.div`
        width: 70vw;
        height: 50vh;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        box-shadow: 0px 0px 100px 500px #7f7f7f60;

`;

export const Table = styled.div`
    .MuiDataGrid-menuIcon {
        display: none;
    }

    .MuiDataGrid-root {
        border: 1px solid #7E7E7E;
        border-radius:0px;
    }

    .MuiButtonBase-root  {
        display: none;
    }

    .MuiDataGrid-footerContainer{
        display: none;
    }

    .MuiDataGrid-columnHeaderWrapper{
        background: #0075B1;
        color: #fff;
    }

    .MuiDataGrid-columnSeparator{
        display: none;
    }

    .MuiDataGrid-cell{
        border-bottom: 1px solid #7E7E7E;
    }

    .MuiDataGrid-cell:nth-child(5){
        font-size:20px;
    }
    .MuiDataGrid-window{
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;