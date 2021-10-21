import styled, { css } from 'styled-components';

interface cardProps {
  color?: string,
  show: boolean;
  darkMode?: boolean;
}

export const Container = styled.a<cardProps>`
  cursor: pointer;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
  margin: 1rem;
  float: left;
  min-height: 150px;

  ${(props) => props.darkMode ?
    css`
      background: #fff; 
    `: css`
      background: #11181D;
    `}

  ${(props) => props.color === "ANDAMENTO" &&
    css`
      border-left:  15px solid #EBB93A;
    `}

  ${(props) => props.color === "CONCLUÍDO" && 
    css`
      border-left:  15px solid #6AACDA;
    `}

  ${(props) => props.color === "ATRASADO" &&
    css`
      border-left:  15px solid #AC341A;
    `}

  ${(props) => props.show ? 
    css` 
      width: 30%;
      min-height : 200px;
    `: css`
      width:45%; 
      min-height: 150px;

    @media (max-width: 1024px) and (min-width: 769px) {
      margin: .6rem;
    }
    
    @media (max-width: 768px){
      width: 40%;
      margin: 1rem .6rem 1rem 1.6rem;
    }
    `}

  @media (max-width: 425px){
    width: 90%;
  }

  @media (max-width: 768px){
    width: 43%;
    margin: 1rem .6rem 1rem 1rem;
  }
`;

export const TitleSection = styled.p<cardProps>`
  width: 200px;
  margin-top: 1rem;
  margin-left: 2rem;

  ${(props) => props.darkMode ?
    css`
      color: #0075B1;
    ` : css`
      color: #96CBE2;
    `}

  @media (max-width: 1024px) and (min-width: 426px) {
    font-size: .81em;
  }
  
  @media (max-width: 425px){
    font-size: 80%;
  }

  ${(props) => props.show ? 
    css` 
      font-size: .9em;
    `: css`
      font-size: .75em;
  `}
`;

export const TitleProject = styled.p<cardProps>`
  margin-left: 2rem;

  ${(props) => props.darkMode ?
    css`
      color: #000000;
    ` : css`
      color: #fff;
    `}

  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: .94em;
    width: 350px;
  }
  
  @media (max-width: 768px) and (min-width: 426px) {
    font-size: .75em;
    width: 245px; 
  }

  @media (max-width: 425px){
    font-size: 100%;
  }

  ${(props) => props.show ? 
    css` 
      width: 315px;
      font-size: 1em;
      margin-top: 1rem; 
    `: css`
      width: 500px;
      font-size: 1.15em;
      margin-top: 0;

    @media (max-width: 768px){
      width: 200px;
      margin-top: 5px;
    }

    @media (max-width: 1024px) and (min-width: 769px) {
      width: 220px;
      font-size: .9em;
      margin-top: 10px;
    }
  `}
`;

export const HoldHours = styled.div<cardProps>`
  width:200px;
  min-height:40px;
  float: left;

  ${(props) => props.darkMode ?
    css`
      color: #000000;
    ` : css`
      color: #fff;
    `}

  @media (max-width: 425px){
    margin-left: 2rem;
    width: 150px;
  }

  @media (max-width: 768px){
    margin-left: 1rem;
    width: 130px;
  }

  ${(props) => props.show ? 
    css` 
      margin-left: 7px;
      margin-top: 1rem; 
    `: css`
      margin-left: 2rem;
      margin-top: 7px;
        
    @media (max-width: 1024px) and (min-width: 769px){
      margin-left: 1rem;
      width: 140px;
      margin-top: 10px;
    }

    @media (max-width: 768px){
      width: 130px;
    }
  `}
`;

export const Hours = styled.div<cardProps>`
  min-height:20px;
  margin-left: 15%;
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  
  ${(props) => props.show ? 
    css` 
      width: 155px;
      font-size:.7em; 
    `: css`
      width:200px;
      font-size: .75em;
          
    @media (max-width: 1024px) and (min-width: 769px){
      width: 100px;
        p{
          font-size: .75em;
        } 
    }
  `}

  @media (max-width: 768px){
    margin-left: 1rem;
    width: 100px;
      p{
        font-size: .75em;
      } 
  }

  @media (max-width: 1024px) and (min-width: 769px){
    margin-left: 1rem;
    width: 150px;
  }
`;

export const Status = styled.div<cardProps>`
  width:7.7em;
  max-width: 10em;
  float:right;
  text-align: center;

  ${(props) => props.darkMode ?
    css`
      color: #000000;
    ` : css`
      color: #fff;
    `}

  p:nth-child(1){
    font-weight: regular;
    font-size: .95em;
    
  }

  p:nth-child(2){
    font-weight: bold;
    font-size: 1.1em;
  }

  ${(props) => props.show ? 
    css` 
      margin-top: 17px;
      margin-right: 16px;
      min-height:60px;
      
      p:nth-child(1){
        font-size: .9em;
      }

      p:nth-child(2){
        font-size: 1em;
      }
    `: css`
      margin-top: 7px;
      margin-right: 32px;
      min-height:60px;

      p:nth-child(1){
        font-size: .95em;
      }

      p:nth-child(2){
        font-size: 1.1em;
      }
        
    @media (max-width: 768px) {
      margin: 5px 0 5px 0;  
    }

    @media (max-width: 1024px) and (min-width: 769px) {
      margin: 5px 0 0 0;
    }
  `}

  @media (max-width: 1024px) and (min-width: 769px) {
    margin-right: 25px;
    min-height: 45px;
    
    p:nth-child(1){
      font-weight: regular;
      font-size: .8em;
    }

    p:nth-child(2){
      font-weight: bold;
      font-size: .95em;
    }
  }

  @media (max-width: 768px) and (min-width: 426px) {
    margin-right: 15px;
    min-height:60px;

    p:nth-child(1){
      font-weight: regular;
      font-size: .8em;
    }

    p:nth-child(2){
      font-weight: bold;
      font-size: .95em;
    }
  }

  @media (max-width: 425px){
    margin-right: 5px;
    p:nth-child(1){
      font-weight: regular;
      font-size: 70%;
    }

    p:nth-child(2){
      font-weight: bold;
      font-size: 75%;
    }
  }
`;

export const Date = styled.div<cardProps>`
  min-height:15px;
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;

  ${(props) => props.darkMode ?
    css`
      p {
        color: #7E7E7E;
      }
    ` : css`
      p {
        color: #D2D2D2;
      }
    `}
  
  p {
    float: left;
    font-size: .75em;
  }

  ${(props) => props.show ? 
    css` 
      width: 300px;

      @media (max-width: 1024px){
        width: 250px;
        margin-top: 5px;
      }
    `: css`
        width: 465px;

      @media (max-width: 1024px){
        width: 200px;
        margin-top: 5px;
      }
  `}

  @media (max-width: 768px) and (min-width: 426px) {
    width: 215px;
  }
`;