import React from 'react';
import ReactDOM from 'react-dom';
import GoogleBookSearchApp from './GoogleBookSearchApp';

describe(`Google Book Search App Component`, () => {

    it('renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<GoogleBookSearchApp />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
});