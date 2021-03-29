import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from './component';

describe('layout component', () => {
    let component: HTMLElement;
    const childElementText = 'some child text';

    beforeEach(() => {
        const { getByText } = render(<Layout>{childElementText}</Layout>);
        component = getByText(childElementText);
    });

    test(`renders the component`, () => {
        expect(component).toBeTruthy();
    });
});
