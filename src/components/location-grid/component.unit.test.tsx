import React from 'react';
import { render } from '@testing-library/react';
import { LocationGrid } from './component';
import { Location } from '../../types';

describe('map component', () => {
    let components: HTMLElement[];
    const locations: Location[] = [
        { id: 1, name: 'some location name' },
        { id: 2, name: 'some location name' },
        { id: 3, name: 'some location name' }
    ];

    beforeEach(() => {
        const { getAllByText } = render(<LocationGrid locations={locations} />);
        components = getAllByText('View Location');
    });

    test(`renders the list of locations`, () => {
        expect(components.length).toEqual(3);
    });
});
