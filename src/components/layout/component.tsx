import React from 'react';
import { Wrapper, Container } from './component.styles';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default Layout;
