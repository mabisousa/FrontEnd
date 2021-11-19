import React from 'react';

import { Container, Responsavel,Tabela, Infos, Apontamento, Descricao } from './style';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { RiArrowRightSLine } from 'react-icons/ri';

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
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ width: '90%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }} className="header">
                <p>0001</p>
                <p>ISAC FREIRE BEZERRA</p>
                <p>SOLICITADAS: 10</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Responsavel>
                <span>
                  RESPONSÁVEL: Jorge Matheus 
                </span>
              </Responsavel>
              <Infos>
                <Tabela>
                  <table>
                    <thead>
                      <h1>
                        REQUISIÇÕES
                      </h1>
                    </thead>
                    <tbody>
                      <tr>
                        <td>20/20/2020</td>
                        <RiArrowRightSLine />
                      </tr>
                      <tr>
                        <td>20/20/2020</td>
                        <RiArrowRightSLine />
                      </tr>
                      <tr>
                        <td>20/20/2020</td>
                        <RiArrowRightSLine />
                      </tr>
                      <tr>
                        <td>20/20/2020</td>
                        <RiArrowRightSLine  />
                      </tr>
                    </tbody>
                  </table>
                </Tabela>
                <Descricao>
                  <h1>
                    DESCRIÇÃO:
                  </h1>
                  <p>
                  </p>
                </Descricao>
                <Apontamento>
                  <h1>
                    APONTAMENTO:
                  </h1>
                  <p>
                  </p>
                </Apontamento>
              </Infos>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ width: '90%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }} className="header">
                <p>0002</p>
                <p>JEAN HENRIQUE REIGUEL</p>
                <p>SOLICITADAS: 10</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{fontSize: '12'}}>
                0002 - JEAN HENRIQUE REIGUEL
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ width: '90%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }} className="header">
                <p>0003</p>
                <p>MARIA GABRIELA DE SOUSA CRUZ</p>
                <p>SOLICITADAS: 10</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{fontSize: '12'}}>
                0003 - MARIA GABRIELA DE SOUSA CRUZ
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </>
  )
};

export default TabelaRequisicao;
