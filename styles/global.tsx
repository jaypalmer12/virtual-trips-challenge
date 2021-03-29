import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { colors } from './variables';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    html,
    body {
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        line-height: normal;
        font-size: 16px;
        color: ${colors.black}
    }

    * {
        box-sizing: border-box;
    }
`;
