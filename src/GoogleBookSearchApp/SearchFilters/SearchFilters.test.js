import React from 'react';
import ReactDOM from 'react-dom';
import SearchFilters from './SearchFilters';

describe('SearchFilters Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchFilters /> , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})