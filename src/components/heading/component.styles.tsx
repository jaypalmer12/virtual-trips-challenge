import styled from 'styled-components';
import { breakpoints } from '../../../styles';

type HeadingProps = {
    weight?: 'NORMAL' | 'LIGHT' | 'SEMIBOLD' | 'BOLD';
};

const fontWeightMap = {
    NORMAL: 'normal',
    LIGHT: 300,
    SEMIBOLD: 600,
    BOLD: 700
};

export const H1Element = styled.h1<HeadingProps>`
    font-size: 30px;
    font-weight: ${(props) => (props.weight ? fontWeightMap[props.weight] : fontWeightMap.BOLD)};

    @media (min-width: ${breakpoints.tablet}px) {
        font-size: 40px;
    }
`;

export const H2Element = styled.h2<HeadingProps>`
    margin: 0;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    font-weight: ${(props) => (props.weight ? fontWeightMap[props.weight] : fontWeightMap.BOLD)};
`;
