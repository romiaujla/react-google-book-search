import React, {Component} from 'react';
import './SearchForm.css';
import SearchFilters from '../SearchFilters/SearchFilters';

export default class SearchForm extends Component {

    static defaultProps = {
        printFilters: [],
        bookFilters: [],
        printType: '',
        bookType: '',
        setBookName: () => {},
        setPrintType: () => {},
        setBookType: () => {},
        handleSubmit: () => {}
    };

    render(){
        return (
            <div className='SearchForm'>
                 <form 
                    onSubmit={(e) => this.props.handleSubmit(e)}
                >
                     <div className='SearchBox'>
                        <label htmlFor='book-name'>
                            Search: 
                            <input 
                                type='text' 
                                placeholder='Enter Book To Search' 
                                required 
                                onKeyUp={(e) => this.props.setBookName(e.target.value)} 
                            />
                        </label>
                        <button type='submit'>
                            Search
                        </button>
                     </div>
                     <SearchFilters 
                        printFilters={this.props.printFilters}
                        bookFilters={this.props.bookFilters}
                        printType={this.props.printType}
                        bookType={this.props.bookType}
                        setPrintType={this.props.setPrintType}
                        setBookType={this.props.setBookType}
                     />
                 </form>
            </div>
        );
    }
}