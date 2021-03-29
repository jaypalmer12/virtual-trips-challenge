import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchField } from './component';

describe('search field component', () => {
    let fieldElement: HTMLElement;
    let fieldValue: string;
    const placeholderText = 'some placeholder text';
    const valueText = 'some field value text';

    beforeEach(() => {
        const { getByPlaceholderText } = render(<SearchField placeholder={placeholderText} onChange={(value) => (fieldValue = value)} />);
        fieldElement = getByPlaceholderText(placeholderText);
    });

    test(`renders the component`, () => {
        expect(fieldElement).toBeTruthy();
    });

    test(`the placeholder text to be set`, () => {
        expect(fieldElement.getAttribute('placeholder')).toEqual(placeholderText);
    });

    test(`the field type is set to 'search'`, () => {
        expect(fieldElement.getAttribute('type')).toEqual('search');
    });

    test(`onChange returns the value of the field`, () => {
        fireEvent.change(fieldElement, { target: { value: valueText } });
        expect(fieldValue).toBe(valueText);
    });
});
