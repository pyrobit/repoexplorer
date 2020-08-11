import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import gitLogo from '../../assets/git-app-logo.svg';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;


    };

}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories ] = useState<Repository[]>([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>):Promise<void> {
        // add new repo
        //consume github api
        // save new repo in State

        event.preventDefault();
        const response = await api.get(`repos/${newRepo}`);
const repository = response.data;
        setRepositories([ ...repositories, repository]);
        setNewRepo('');
    }

    return ( 
        <>
        <img src={gitLogo} alt="Logo do Github Explorer"/>
    <Title>Explore repositories no Github.</Title>
    

    <Form onSubmit={handleAddRepository}>
        <input value={newRepo} 
            onChange={e => setNewRepo(e.target.value)} 
            placeholder="Digite aqui"
            />
        <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
        {repositories.map(repository => (
             <a key={repository.full_name} href="#">
             <img src={repository.owner.avatar_url} alt={repository.owner.login} />
             <div>
        <strong>{repository.full_name}</strong>
        <p>{repository.description}</p>
             </div>
             <FiChevronRight size={40} />
         
         </a>
        ))}
       
        
        
    </Repositories>

    </>
    );
};

export default Dashboard;