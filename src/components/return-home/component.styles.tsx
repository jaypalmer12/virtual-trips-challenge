import styled from 'styled-components';
import { theme } from '../../../styles';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const LinkElement = styled.a`
    margin-right: 30px;
`;

export const ChevronLeft = styled.i`
    display: inline-block;
    border-right: 4px solid ${theme.primary};
    border-bottom: 4px solid ${theme.primary};
    width: 16px;
    height: 16px;
    transform: rotate(-225deg);
    cursor: pointer;
`;
