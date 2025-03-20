import React from 'react';
import {Button, ButtonGroup} from '@mui/material';

const FilterPanel = ({onFilterChange}) => {
    const categories = [
        {value: 'all', label: 'Все'},
        {value: 'electronics', label: 'Техника'},
        {value: 'clothing', label: 'Одежда'},
        {value: 'books', label: 'Книжки'},
    ];
    return (
        <ButtonGroup variant="contained" sx={{my: 2}}>
            {categories.map((category) => (
                <Button key={category.value} onClick={() => onFilterChange(category.value)}>
                    {category.label}
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default FilterPanel;