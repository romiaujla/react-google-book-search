import React, {Component} from 'react';
import './SearchForm.css';
import SearchFilters from '../SearchFilters/SearchFilters';

export default class SearchForm extends Component {

    static defaultProps = {
        printFilters: [],
        bookFilters: []
    };

    render(){
        return (
            <div className='SearchForm'>
                 <form>
                     <div className='SearchBox'>
                        <label htmlFor='book-name'>
                            Search: <input type='text' placeholder='Enter Book To Search' required />
                        </label>
                        <button type='submit'>Search</button>
                     </div>
                     <SearchFilters 
                        printFilters={this.props.printFilters}
                        bookFilters={this.props.bookFilters}
                     />
                 </form>
            </div>
        );
    }
}