import styled from 'styled-components';
import { breakpoints, colors, theme } from '../../../styles';

export const Grid = styled.ul`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: auto;
    padding: 40px 0;
    margin: 0;
    list-style: none;
    justify-items: center;

    @media (min-width: ${breakpoints.tablet}px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    max-width: 350px;
    padding: 15px;
    background-color: ${colors.white};
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 25px;
`;

export const Heading = styled.h2`
    margin: 0;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`;

export const Image = styled.img`
    display: block;
    height: 45px;
    width: 45px;
    margin: auto 0 30px;
`;

export const Button = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: ${theme.primary};
    color: ${colors.white};
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color ease 200ms;

    &:hover {
        background-color: ${theme.secondary};
    }
`;
