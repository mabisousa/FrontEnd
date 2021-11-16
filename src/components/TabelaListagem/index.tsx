import React from 'react';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { Container } from './style';

const TabelaConsultor: React.FC = () => {

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
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                0001 - ISAC FREIRE BEZERRA
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>20/20/20</Typography>
              <Typography sx={{ color: 'text.secondary' }}></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{fontSize: '12'}}>
                0001 - ISAC FREIRE BEZERRA
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ width: '90%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                0002 - JEAN HENRIQUE REIGUEL
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>20/20/20</Typography>
              <Typography sx={{ color: 'text.secondary' }}></Typography>
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
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                0003 - MARIA GABRIELA DE SOUSA CRUZ
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>20/20/20</Typography>
              <Typography sx={{ color: 'text.secondary' }}></Typography>
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

export default TabelaConsultor;
