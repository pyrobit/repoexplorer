import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/git-app-logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>();
    return (
        <>
            <Header>
                <img src={logoImg} alt="Repository Explorer logo" />
                <Link to="/" >
                    <FiChevronLeft size={16} />
                Voltar
                </Link>
            </Header>
            <h1>Repository: {params.repository} </h1>
            <RepositoryInfo>
                <header>
                    <img src={logoImg} alt="Repository Image" />
                    <div>
                        <strong>name/repo</strong>
                        <p>Description of the repo</p>
                    </div>
                </h eader>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Open Issues</span>
                    </li>

                </ul>
            </RepositoryInfo>

            <Issues>

                <Link to={"sdfgd"} >
                    <div>
                        <strong>Strong</strong>
                        <p>Paragraph</p>
                    </div>
                    <FiChevronRight size={40} />
                </Link>

            </Issues>
        </>
    );
};

export default Repository;
