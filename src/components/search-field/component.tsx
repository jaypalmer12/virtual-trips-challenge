import React, { ChangeEvent } from 'react';
import { InputField } from './component.styles';

type SearchFieldProps = {
    placeholder: string;
    onChange: (unknown?) => unknown;
};

export const SearchField = ({ placeholder, onChange }: SearchFieldProps): JSX.Element => {
    const handleInputChange = (event: ChangeEvent) => {
        const { value } = event.target as any;
        onChange(value);
    };

    return <InputField type="search" placeholder={placeholder} onChange={(event) => handleInputChange(event)} />;
};

export default SearchField;
