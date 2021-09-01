import React from "react";
import { Title, Form, Filters } from './style'
import {IoIosArrowDown} from 'react-icons/io';
import display1 from '../../imgs/display1.svg';
import display2 from '../../imgs/display2.svg';

const Filter: React.FC = () => (
    <Filters>
        <div>
            <Title>PROJETOS ALOCADOS</Title>
            <div>
                <div id="filter">
                    <Form >
                        <label>Projeto:</label>
                        <input type="text" placeholder="Digite aqui... "/>
                    </Form>
                    <p>Seção:</p>
                    <div>
                        <span>Todos</span>
                        <IoIosArrowDown id="img" size={17}/>
                    </div>
                    <p>Status:</p>
                    <div>
                        <span>Todos</span>
                        <IoIosArrowDown id="img" size={17}/>
                    </div>
                </div>
                <a href="/home"> <img src={display1} alt=""/></a>
                <a href="/display2"><img src={display2} alt=""/></a>
            </div> 
        </div>
    </Filters>
)

export default Filter;