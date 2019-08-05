import React, {Component} from 'react';
import './SearchFilters.css';

export default class SearchFilters extends Component {

    static defaultProps = {
        printFilters: [],
        bookFilters: []
    }

    render(){

        const {printFilters, bookFilters} = this.props;
        // console.log(printFilters, bookFilters);

        const pFilters = printFilters.map((filter, index) => {
            const key = Object.keys(filter)[0];
            return <option value={key} key={index}>{filter[key]}</option>;
        })

        const bFilters = bookFilters.map((filter, index) => {
            const key = Object.keys(filter)[0];
            return <option value={key} key={index}>{filter[key]}</option>;
        })

        return (
            <div className='SearchFilters'>
                <div className='print-type-filter inline-div'>
                    <label htmlFor='print-type-filter'>
                        Print Type: 
                    </label>
                    <select id='print-type-filter' name='print-type-filter'>
                        {pFilters}
                    </select>
                </div>
                <div className='book-type-filter inline-div'>
                    <label htmlFor='book-type-filter'>
                        Book Type: 
                    </label>
                    <select id='book-type-filter' name='book-type-filter'>
                        {bFilters}
                    </select>
                </div>
            </div>
        );
    }
}