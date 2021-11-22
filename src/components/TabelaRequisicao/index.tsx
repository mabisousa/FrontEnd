import React from 'react';

import { Container, Responsavel,Tabela, Infos, Apontamento, Descricao } from './style';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { RiArrowRightSLine } from 'react-icons/ri';

import { i18n } from '../../translate/i18n';

const TabelaRequisicao: React.FC = () => {

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  return (
    <> 
      <Container>
        <div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ width: '90%'}} className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }} className="header">
                <p>
                  0001
                </p>
                <p>
                  ISAC FREIRE BEZERRA
                </p>
                <section>
                  <p>
                    {i18n.t('requisicoes.solicitadas')} 
                  </p>
                  <p>
                    10
                  </p> 
                </section>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Responsavel>
                <p>
                  {i18n.t('listagem.responsavel')} 
                </p>
                <p>
                  Jorge Matheus 
                </p>
              </Responsavel>
              <Infos>
                <Tabela>
                  <table>
                    <thead>
                      <h1>
                        {i18n.t('requisicoes.titulo')}: 
                      </h1>
                    </thead>
                    <tbody>
                      <tr>
                        <td>20/20/2020</td>
                        <RiArrowRightSLine/>
                      </tr>
                      <tr>
                        <td>20/20/2020</td>
                        <RiArrowRightSLine/>
                      </tr>
                      <tr>
                        <td>20/20/2020</td>
                        <RiArrowRightSLine/>
                      </tr>
                      <tr>
                        <td>20/20/2020</td>
                        <RiArrowRightSLine/>
                      </tr>
                    </tbody>
                  </table>
                </Tabela>
                <Descricao>
                  <h1>
                    {i18n.t('listagem.descricao')}:
                  </h1>
                  <p>
                  </p>
                </Descricao>
                <Apontamento>
                  <h1>
                    {i18n.t('listagem.apontamento')}
                  </h1>
                  <p>
                  </p>
                </Apontamento>
              </Infos>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </>
  )
};

export default TabelaRequisicao;
