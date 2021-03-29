import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './component';

describe('loader component', () => {
    let component: HTMLElement;

    beforeEach(() => {
        const { getByAltText } = render(<Loader />);
        component = getByAltText('Loading...');
    });

    test(`renders the component`, () => {
        expect(component).toBeTruthy();
    });
});
