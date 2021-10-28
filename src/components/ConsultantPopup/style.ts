import styled, {css} from 'styled-components';

interface PopUp {
  show: boolean;
}

export const Container = styled.div<PopUp>`

  ${(props) => !props.show && 
    css`
      div {
        visibility: visible;
      }
  `}

  transition: 200ms ease-in-out;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  color: ${props => props.theme.colors.title};

  #hold{
    position: relative;
    background-color: ${props => props.theme.colors.background};
    width: 960px;
    height: 570px;
    padding: 10px;
  }

  button{
    float: right;
    color: black;
    margin-right: 20px;
    font-size: 1.9em;
    margin-top: 20px;
    background-color: transparent;
    border: 0;

    svg{
      color: ${props => props.theme.colors.title};
    }
  }

  #grid{
    margin-left: 30px;
  }
`;

export const PopUpInfo = styled.div`
  margin-top: 50px;
  margin-left: 35px;

  header{
    display: flex;
    align-items: center;
  }

  svg{
    color: ${props => props.theme.colors.iconColor};
    width: 100px;
    height: 100px;
    margin-left: 35px;
  }

  div{
    margin-left: 40px;
  }

  h1{
    font-size: 1.15em;
    font-weight: bolder;
    text-decoration: 2px underline ${props => props.theme.colors.undeline};
  }

  p{
    font-size: 1.15em;
    font-weight: lighter;
    margin-top: 4px;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 60px;
  width: 100%;
  height: 260px;
  justify-content: space-between;
`;

export const Skills = styled.div`
  width: 40%;
  margin-left: 30px;

  h5{
    margin-bottom: 35px;
    margin-top: 5px;
  }
`;

export const HoldContent = styled.div`
  border: 1px solid #8B8787;
  height: 88%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 10px;
`;

export const PopUpTable = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 30px;

  table{
    border-collapse: collapse;
    width: 100%;
    text-align: center;
  }

  thead{
    background: ${props => props.theme.colors.thead};
    height: 40px;
    display: inline-flex;
    width:100%;
    text-transform: uppercase;
    font-size: .9em;
    margin-bottom: 15px;
  }

  thead tr{
    margin-top: 5px;
    color: #fff;  
    border: none;
  }
              
  tbody {
    height: 230px;
    overflow-y: scroll;
    overflow-x: hidden;
    display: block;
    border: 1px solid #8B8787;
  }

  tr {
    font-size: .9em;
    letter-spacing: 0.01071em;
    height: 17px;
    margin:15px;
    border-bottom: 1px solid #8B8787;
  }

  td {
    padding: 5px;
    width: 484px;
  }
`;