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
            printFilters: [
                {'all' : 'All'},
                {'books' : 'Books'},
                {'magazines' : 'Magazines'}
            ],
            bookFilters: [
                {'no-filters': 'No Filters'},
                {'partial': 'Partial Book'},
                {'full': 'Full Book'},
                {'free-ebooks': 'Free E-books'},
                {'paid-ebooks': 'Paid E-books'},
                {'ebooks': 'E-books'}
            ]
        };
    }

    render(){
        return (
            <div className='google_book_search_app'>
                <Header />
                <SearchForm 
                    printFilters={this.state.printFilters}
                    bookFilters={this.state.bookFilters}
                />
            </div>
        );
    }
}