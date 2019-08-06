import React, {Component} from 'react';
import './SearchFilters.css';
import PrintFilter from '../PrintFilter/PrintFilter';
import BookFilter from '../BookFilter/BookFilter';

export default class SearchFilters extends Component {

    static defaultProps = {
        printFilters: [],
        bookFilters: [],
        printType: '',
        bookType: '',
        setPrintType: () => {},
        setBookType: () => {}
    }

    render(){

        const props = this.props;

        return (
            <div className='SearchFilters'>
                <PrintFilter 
                    printFilters={props.printFilters} 
                    printType={props.printType} 
                    setPrintType={props.setPrintType} 
                />
                <BookFilter 
                    bookFilters={props.bookFilters} 
                    bookType={props.bookType} 
                    setBookType={props.setBookType} 
                />
            </div>
        );
    }
}