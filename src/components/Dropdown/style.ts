import styled, { css } from 'styled-components';

interface dropdownProps {
  showDropdown: boolean;
  showArrow: boolean;
}

export const Container = styled.div<dropdownProps>`
  #dropdown{
    width: 150px;
    height: 20px;
    border: solid 1px ${props => props.theme.colors.iconColor};
    color: ${props => props.theme.colors.iconColor};
    font-size: .9em;
    text-align: center;
    cursor: pointer;
    display: block;

    span{
      font-size: .91em;
    }

    div{
      width: 150px;
      position:relative;
      left: -1px;
      border: solid 1px  ${props => props.theme.colors.iconColor};
      color: ${props => props.theme.colors.iconColor};
      background: transparent;
      overflow-y: scroll;
      height: 50px;


      ${(props) => props.showDropdown ?
        css`
          display: none;
        `: css`
          display: block;
        `}

      button{
        font-size: .91em;
        border-bottom: solid 1px  ${props => props.theme.colors.iconColor};
        color: ${props => props.theme.colors.iconColor};
        height: 20px;
        padding-top:1%;
        width: 100%;
      }  
    }
    
    #arrowDown{
      float: right;
      display: block;
      height: 1.06em;
      width: 1.06em;
      color: ${props => props.theme.colors.iconColor};

      ${(props) => props.showArrow ?
        css`
          display: block;
        `: css`
          display: none;
        `}
    }

    #arrowLeft{
      float: right;
      display: none;
      color: ${props => props.theme.colors.iconColor};

      ${(props) => props.showArrow ?
        css`
          display: none;
        `: css`
          display: block;
        `}
    }
  }
`;