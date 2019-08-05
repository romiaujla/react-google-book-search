import React, {Component} from 'react';
import './SearchFilters.css';
import PrintFilter from '../PrintFilter/PrintFilter';
import BookFilter from '../BookFilter/BookFilter';

export default class SearchFilters extends Component {

    static defaultProps = {
        printFilters: [],
        bookFilters: []
    }

    render(){

        const {printFilters, bookFilters} = this.props;

        return (
            <div className='SearchFilters'>
                <PrintFilter printFilters={printFilters} />
                <BookFilter bookFilters={bookFilters} />
            </div>
        );
    }
}