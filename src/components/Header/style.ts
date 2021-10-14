import styled, { css } from "styled-components";

interface dropdownProps {
  showDropdown: boolean;
  showIdioms: boolean;
  showFonts: boolean;
  changeTheme: boolean;
}

export const Container = styled.div<dropdownProps>`
  width: 100%;
  height: 12vh;
  background: #fff;
  border-bottom: 2px solid #90C0E3;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  #name{
    width:220px;
    display: flex;
    align-items: center;
    
    img{
      margin:0 30px;
      height: 70px;
      cursor: pointer;
    }
    
    p {
      font-weight: bold;
      font-size: 1em;
      cursor: pointer;
      color: #00579D;
    }
  }

  #exit{
    width: 60px;
    height: 30px;
    margin: 5px 20px 5px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  
    svg{
      height: 20px;
      width: 20px;
      cursor: pointer;
      margin-right: 7px;
      margin-top: 10px;
      color: #7E7E7E;
    }

    #sair {
      font-size: .9em;
      width: 40px;
      color: #00579D;
      cursor: pointer;
      border-left: 1.5px solid #00579D;
      text-align: center;
      margin-top: 7px;
    }

    #dropdown{
      position: absolute;
      right: 62px;
      top: 35px;
      border: solid 1px #7E7E7E;
      border-bottom: 0;
      color: #7E7E7E;
      cursor: pointer;
      min-width: 180px;
      background-color: #FFF; 
      height: auto;

      ${(props) => props.showDropdown ?
        css`
          display: none;
        `: css`
          display: block;
        `}

      button{ 
        width: 100%;
        border: none;
        border-bottom: solid 1px  #7E7E7E;
        display: flex;
        min-height: 35px;
        color: #7E7E7E;
        align-items: center;
        background-color: transparent;
        

          p{
            min-height: 20px;
            font-size: 1em;
          }

          img{
            height: 30px;
            width: 30px;
            cursor: pointer;
            margin-left: 8px;
            margin-right: 8px;
          }

          span{
            min-height: 20px;
            font-size: .9em;
          }

          .border{
            border-bottom: solid 1px  #CBCBCB;
          }
      }

      #idioms, #fonts{
        img{
          height: 25px;
          width: 25px;
          cursor: pointer;
          margin-left: 16px;
          margin-right: 8px;
        }                
      }
        
      #idioms{
        height: 105px;

        ${(props) => props.showIdioms ?
        css`
          display: none;
        `: css`
          display: block;
        `}  
      }

      #fonts{
        height: 70px;
          
        ${(props) => props.showFonts ?
        css`
          display: none;
        `: css`
          display: block;
        `}
      }

      #switchThemeLight{
        ${(props) => props.changeTheme ?
        css`
          display: block;
        `: css`
          display: none;
        `}
      }

      #switchThemeDark{
        ${(props) => props.changeTheme ?
        css`
          display: none;
        `: css`
          display: block;
        `}
      }     
    }
  }
`;