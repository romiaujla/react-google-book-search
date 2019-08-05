import React from 'react';
import Header from './Header';
import ReactDOM from 'react-dom';

describe(`Header Component`, () => {

    it('renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
});