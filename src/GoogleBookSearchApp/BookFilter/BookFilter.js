import React, {Component} from 'react';

export default class BookFilter extends Component {
    static defaultProps = {
        bookFilters: []
    }

    render(){

        const bFilters = this.props.bookFilters.map((filter, index) => {
            const key = Object.keys(filter)[0];
            return <option value={key} key={index}>{filter[key]}</option>;
        })

        return (
            <div className='book-type-filter inline-div'>
                <label htmlFor='book-type-filter'>
                    Book Type: 
                </label>
                <select id='book-type-filter' name='book-type-filter'>
                    {bFilters}
                </select>
            </div>
        );
    }
}