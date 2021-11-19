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
              <Typography sx={{ width: '33%', flexShrink: 0 }} className="cabecalho">
                <p>0001</p>
                <p>ISAC FREIRE BEZERRA</p>
                <p>20/20/2020</p>
                <p>60/70</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="cabecalhoDetalhe">
                <p>0001 - ISAC FREIRE BEZERRA</p>
                <p>20/20/2020</p>
              </div>
              <div className="detalhe">
                <div id="informacoes">
                  <h1>INFORMAÇÕES</h1>
                  <div id="responsavel">
                    <p>RESPONSÁVEL: </p>
                    <p>JORGE MATHEUS</p>
                  </div>
                  <div id="valorAprovado">
                    <p>VALOR APROVADO:</p>
                    <p>R$5,000,00</p>
                  </div>
                  <div id="valorHora">
                    <p>VALOR HORA:</p>
                    <p>R$4,00</p>
                  </div>
                  <div id="horasAprovadas">
                    <p>HORAS APROVADAS:</p>
                    <p>300H</p>
                  </div>
                  <div id="totalAprovados">
                    <p>TOTAL DE APROVADOS:</p>
                    <p>60</p>
                  </div>
                </div>
                <div id="apontamentos">
                  <h1>
                    APONTAMENTOS
                  </h1>
                  <table>
                    <thead>
                      <tr>
                        <td>DATA</td>
                        <td>HORAS</td>
                        <td>DESCRIÇÃO</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ width: '90%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }} className="cabecalho">
                <p>0001</p>
                <p>ISAC FREIRE BEZERRA</p>
                <p>20/20/2020</p>
                <p>60/70</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="cabecalhoDetalhe">
                <p>0001 - ISAC FREIRE BEZERRA</p>
                <p>20/20/2020</p>
              </div>
              <div className="detalhe">
                <div id="informacoes">
                  <h1>INFORMAÇÕES</h1>
                  <div id="responsavel">
                    <p>RESPONSÁVEL: </p>
                    <p>JORGE MATHEUS</p>
                  </div>
                  <div id="valorAprovado">
                    <p>VALOR APROVADO:</p>
                    <p>R$5,000,00</p>
                  </div>
                  <div id="valorHora">
                    <p>VALOR HORA:</p>
                    <p>R$4,00</p>
                  </div>
                  <div id="horasAprovadas">
                    <p>HORAS APROVADAS:</p>
                    <p>300H</p>
                  </div>
                  <div id="totalAprovados">
                    <p>TOTAL DE APROVADOS:</p>
                    <p>60</p>
                  </div>
                </div>
                <div id="apontamentos">
                  <h1>
                    APONTAMENTOS
                  </h1>
                  <table>
                    <thead>
                      <tr>
                        <td>DATA</td>
                        <td>HORAS</td>
                        <td>DESCRIÇÃO</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ width: '90%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }} className="cabecalho">
                <p>0001</p>
                <p>ISAC FREIRE BEZERRA</p>
                <p>20/20/2020</p>
                <p>60/70</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="cabecalhoDetalhe">
                <p>0001 - ISAC FREIRE BEZERRA</p>
                <p>20/20/2020</p>
              </div>
              <div className="detalhe">
                <div id="informacoes">
                  <h1>INFORMAÇÕES</h1>
                  <div id="responsavel">
                    <p>RESPONSÁVEL: </p>
                    <p>JORGE MATHEUS</p>
                  </div>
                  <div id="valorAprovado">
                    <p>VALOR APROVADO:</p>
                    <p>R$5,000,00</p>
                  </div>
                  <div id="valorHora">
                    <p>VALOR HORA:</p>
                    <p>R$4,00</p>
                  </div>
                  <div id="horasAprovadas">
                    <p>HORAS APROVADAS:</p>
                    <p>300H</p>
                  </div>
                  <div id="totalAprovados">
                    <p>TOTAL DE APROVADOS:</p>
                    <p>60</p>
                  </div>
                </div>
                <div id="apontamentos">
                  <h1>
                    APONTAMENTOS
                  </h1>
                  <table>
                    <thead>
                      <tr>
                        <td>DATA</td>
                        <td>HORAS</td>
                        <td>DESCRIÇÃO</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ width: '90%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }} className="cabecalho">
                <p>0001</p>
                <p>ISAC FREIRE BEZERRA</p>
                <p>20/20/2020</p>
                <p>60/70</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="cabecalhoDetalhe">
                <p>0001 - ISAC FREIRE BEZERRA</p>
                <p>20/20/2020</p>
              </div>
              <div className="detalhe">
                <div id="informacoes">
                  <h1>INFORMAÇÕES</h1>
                  <div id="responsavel">
                    <p>RESPONSÁVEL: </p>
                    <p>JORGE MATHEUS</p>
                  </div>
                  <div id="valorAprovado">
                    <p>VALOR APROVADO:</p>
                    <p>R$5,000,00</p>
                  </div>
                  <div id="valorHora">
                    <p>VALOR HORA:</p>
                    <p>R$4,00</p>
                  </div>
                  <div id="horasAprovadas">
                    <p>HORAS APROVADAS:</p>
                    <p>300H</p>
                  </div>
                  <div id="totalAprovados">
                    <p>TOTAL DE APROVADOS:</p>
                    <p>60</p>
                  </div>
                </div>
                <div id="apontamentos">
                  <h1>
                    APONTAMENTOS
                  </h1>
                  <table>
                    <thead>
                      <tr>
                        <td>DATA</td>
                        <td>HORAS</td>
                        <td>DESCRIÇÃO</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ width: '90%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }} className="cabecalho">
                <p>0001</p>
                <p>ISAC FREIRE BEZERRA</p>
                <p>20/20/2020</p>
                <p>60/70</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="cabecalhoDetalhe">
                <p>0001 - ISAC FREIRE BEZERRA</p>
                <p>20/20/2020</p>
              </div>
              <div className="detalhe">
                <div id="informacoes">
                  <h1>INFORMAÇÕES</h1>
                  <div id="responsavel">
                    <p>RESPONSÁVEL: </p>
                    <p>JORGE MATHEUS</p>
                  </div>
                  <div id="valorAprovado">
                    <p>VALOR APROVADO:</p>
                    <p>R$5,000,00</p>
                  </div>
                  <div id="valorHora">
                    <p>VALOR HORA:</p>
                    <p>R$4,00</p>
                  </div>
                  <div id="horasAprovadas">
                    <p>HORAS APROVADAS:</p>
                    <p>300H</p>
                  </div>
                  <div id="totalAprovados">
                    <p>TOTAL DE APROVADOS:</p>
                    <p>60</p>
                  </div>
                </div>
                <div id="apontamentos">
                  <h1>
                    APONTAMENTOS
                  </h1>
                  <table>
                    <thead>
                      <tr>
                        <td>DATA</td>
                        <td>HORAS</td>
                        <td>DESCRIÇÃO</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </>
  )
};

export default TabelaConsultor;
