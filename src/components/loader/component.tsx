import React from 'react';
import { Container, Image } from './component.styles';

export const Loader = (): JSX.Element => (
    <Container>
        <Image src="/svg/loading.svg" alt="Loading..." />
    </Container>
);

export default Loader;
