import React from 'react';

import { Cards, Card, BarStatus, TitleSection, TitleProject, HoldHours, Hours, Status, Date} from './styles';
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Filters from '../../components/Filter';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <p>PROJETOS</p>
      </Header>

      <Profile/>
      <Menu/>
      <Filters/>
      <Cards> 
        <Card  href="projetos/popUp">
          <BarStatus/>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Em Andamento</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
        <Card  href="projetos/popUp">
          <BarStatus/>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Em Andamento</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
        <Card  href="projetos/popUp">
          <BarStatus/>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Em Andamento</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
        <Card  href="projetos/popUp">
          <BarStatus/>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Em Andamento</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
        <Card  href="projetos/popUp">
          <BarStatus/>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Em Andamento</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
        <Card  href="projetos/popUp">
          <BarStatus/>
          <TitleSection> 0000 - SEÇÃO XYZ</TitleSection>
          <TitleProject>0000000 - RESTAURAÇÃO DE ALTERADORES </TitleProject>
          <HoldHours>
            <Hours>
              <p>TOTAL:</p>
              <p>1600h</p>
            </Hours>
              <Hours>
                <p>APONTADAS:</p>
                <p>800h</p>
              </Hours>
            </HoldHours>
            <Status>
              <p>Situação: </p>
              <p>Em Andamento</p>
            </Status>
            <Date>
              <p>De:20/20/2020</p>
              <p>Até:20/20/2020</p>
            </Date>
        </Card>
      </Cards>
    </>
  )
};

export default Home;