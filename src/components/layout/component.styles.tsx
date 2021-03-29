import styled from 'styled-components';
import { breakpoints } from '../../../styles';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 100vh;
    overflow-y: auto;
`;

export const Container = styled.div`
    width: 768px;
    padding: 0 20px;

    @media (min-width: ${breakpoints.tablet}px) {
        padding: 0 25px;
        box-shadow: -1px 0px 6px 1px rgba(0, 0, 0, 0.1);
    }
`;
