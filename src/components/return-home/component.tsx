import React from 'react';
import Link from 'next/link';
import { Container, LinkElement, ChevronLeft } from './component.styles';

type ReturnHomeProps = {
    children: React.ReactNode;
};

export const ReturnHome = ({ children }: ReturnHomeProps): JSX.Element => {
    return (
        <Container>
            <Link href="/">
                <LinkElement>
                    <ChevronLeft />
                </LinkElement>
            </Link>
            {children}
        </Container>
    );
};

export default ReturnHome;
