import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;

    max-width: 450px;
    margin-top: 80px;
    line-height: 56px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;
    
    display: flex;
    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #6A6A6A;
        border: 2px solid #FFF;
        border-right: 0;

        ${(props)=> props.hasError && css` 
            border-color: #C53030;
        `}

        &::placeholder {
            color: #A8A8B3;
        }
    }
    button {
        width: 210px;
        height: 70px;
        border-radius: 0px 5px 5px 0px;
        background: #04D3D1;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2,'#04D3D1' )}
        }

    }

`;

export const Error = styled.span`
     display: block; /* to only use block spacing without being in-line */
     color: #C53030;
     margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;
    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none; /* removes underlines */
        display: flex;
        align-items: center; /* alinha os items ao centro vertical do container */
transition: transform 0.2s;
/* Applies css to all elements a preceded  by other element of type a */
        & + a {
            margin-top: 16px;
        }
        &:hover{
         transform: translateX(20px);   
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            
        }

        div {
            margin-left: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3D3D4D;
            }
            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }
        svg{
            margin-left: auto;
            color: #cbcbd6;
        }

        
    }
`;