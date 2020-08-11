import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';
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

    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories ] = useState<Repository[]>([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>):Promise<void> {
        event.preventDefault(); // needs to be at the beginning

        if(!newRepo) {
            setInputError('Type author/repo names');
            return;
        }
        try {
        const response = await api.get(`repos/${newRepo}`);
const repository = response.data;
        setRepositories([ ...repositories, repository]);
        setNewRepo('');
        } catch(err){
            setInputError('Erro na busca por este repositório.');
            setNewRepo('');
        }
    }

    return ( 
        <>
        <img src={gitLogo} alt="Logo do Github Explorer"/>
    <Title>Explore repositories no Github.</Title>
    

    <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input value={newRepo} 
            onChange={e => setNewRepo(e.target.value)} 
            placeholder="Digite aqui"
            />
        <button type="submit">Pesquisar</button>
    </Form>
    
    {/* shows {inputError} only when it is not empty */}

    {inputError && <Error>{inputError}</Error> }

    <Repositories>
        {repositories.map(repository => (
             <a key={repository.full_name} href="test">
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