import React from 'react';
import ReactDOM from 'react-dom';
import PrintFilter from './PrintFilter';

describe(`PrintFilter Component`, () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<PrintFilter />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})