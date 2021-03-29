import styled from 'styled-components';
import { colors, theme } from '../../../styles';

export const InputField = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 10px 15px;
    background-color: white;
    border-color: ${theme.primary};
    border-radius: 10px;
    border-style: solid;
    font-size: 20px;
    color: black;
    transition: border-color 200ms ease-in-out;

    &:focus {
        outline: none;
        border-color: ${theme.secondary};
    }

    &::placeholder {
        color: ${colors.grey};
    }
`;
