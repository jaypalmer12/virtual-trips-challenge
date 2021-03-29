import React from 'react';
import { render } from '@testing-library/react';
import { Map } from './component';

describe('map component', () => {
    let component: HTMLElement;

    beforeEach(() => {
        const { container } = render(<Map coordinates={{ lat: 1, lng: 1 }} />);
        component = container;
    });

    test(`renders the component`, () => {
        expect(component).toBeTruthy();
    });
});
