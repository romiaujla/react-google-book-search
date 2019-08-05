import React from 'react';
import ReactDOM from 'react-dom';
import BookFilter from './BookFilter';

describe('Book Filter Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BookFilter />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})