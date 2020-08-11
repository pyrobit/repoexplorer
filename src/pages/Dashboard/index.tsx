import React from 'react';

import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import gitLogo from '../../assets/git-app-logo.svg';

const Dashboard: React.FC = () => {
    return ( 
        <>
        <img src={gitLogo} alt="Logo do Github Explorer"/>
    <Title>Explore repositories no Github.</Title>
    

    <Form action="">
        <input placeholder="Digite aqui"/>
        <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
        <a href="#">
            <img src="https://avatars0.githubusercontent.com/u/24610174?s=400&u=1002b82322f192983b00f5fdc9f98352a8b9b5d9&v=4" alt="Bruno de Lima"/>
            <div>
            <strong>sdlab/reform</strong>
            <p>Description: repo of form</p>
            </div>
            <FiChevronRight size={40} />
        
        </a>
        <a href="#">
            <img src="https://avatars0.githubusercontent.com/u/24610174?s=400&u=1002b82322f192983b00f5fdc9f98352a8b9b5d9&v=4" alt="Bruno de Lima"/>
            <div>
            <strong>sdlab/reform</strong>
            <p>Description: repo of form</p>
            </div>
            <FiChevronRight size={40} />
        
        </a>
        <a href="#">
            <img src="https://avatars0.githubusercontent.com/u/24610174?s=400&u=1002b82322f192983b00f5fdc9f98352a8b9b5d9&v=4" alt="Bruno de Lima"/>
            <div>
            <strong>sdlab/reform</strong>
            <p>Description: repo of form</p>
            </div>
            <FiChevronRight size={40} />
        
        </a>
        <a href="#">
            <img src="https://avatars0.githubusercontent.com/u/24610174?s=400&u=1002b82322f192983b00f5fdc9f98352a8b9b5d9&v=4" alt="Bruno de Lima"/>
            <div>
            <strong>sdlab/reform</strong>
            <p>Description: repo of form</p>
            </div>
            <FiChevronRight size={40} />
        
        </a>
        
    </Repositories>

    </>
    );
};

export default Dashboard;