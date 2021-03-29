import React from 'react';
import { render } from '@testing-library/react';
import { ReturnHome } from './component';

describe('return home component', () => {
    let component: HTMLElement;
    const childElementText = 'some child text';

    beforeEach(() => {
        const { getByText } = render(<ReturnHome>{childElementText}</ReturnHome>);
        component = getByText(childElementText);
    });

    test(`renders the component`, () => {
        expect(component).toBeTruthy();
    });
});
