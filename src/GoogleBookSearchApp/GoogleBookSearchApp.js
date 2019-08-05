import React , {Component} from 'react';
import './GoogleBookSearchApp.css';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';

export default class GoogleBookSearchApp extends Component {
    
    static defaultProps={

    }

    constructor (props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div className='google_book_search_app'>
                <Header />
                <SearchForm />
            </div>
        );
    }
}