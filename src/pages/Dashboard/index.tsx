import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GitExplorer:repositories');
        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('@GitExplorer:repositories', JSON.stringify(repositories));
    }, [repositories]);


    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault(); // needs to be at the beginning
        setInputError('');
        if (!newRepo) {
            setInputError('Type author/repo names');
            return;
        }
        try {
            const response = await api.get(`repos/${newRepo}`);
            const repository = response.data;
            setRepositories([...repositories, repository]);
            setNewRepo('');
        } catch (err) {
            setInputError('Erro na busca por este repositório.');
            setNewRepo('');
            setInputError('');
        }
    }

    return (
        <>
            <img src={gitLogo} alt="Logo do Github Explorer" />
            <Title>Explore repositories no Github.</Title>


            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder="Digite aqui"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {/* shows {inputError} only when it is not empty */}

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <Link key={repository.full_name} to={`/repositories/${repository.full_name}`} >
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={40} />

                    </Link>
                ))}



            </Repositories>

        </>
    );
};

export default Dashboard;