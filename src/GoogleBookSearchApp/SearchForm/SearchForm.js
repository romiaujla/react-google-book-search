import React, {Component} from 'react';
import './SearchForm.css';

export default class SearchForm extends Component {

    static defaultProps = {

    };

    constructor(props){
        super(props);
        this.state = {

        }
    }

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
                     <div className='SearchFilters'>
                         <div className='print-type-filter inline-div'>
                            <label htmlFor='print-type-filter'>
                                Print Type: 
                            </label>
                            <select id='print-type-filter' name='print-type-filter'>
                                <option value='All'>All</option>
                                <option value='Some'>Some</option>
                                <option value='None'>None</option>
                            </select>
                         </div>
                         <div className='book-type-filter inline-div'>
                             <label htmlFor='book-type-filter'>
                                 Book Type: 
                             </label>
                             <select id='book-type-filter' name='book-type-filter'>
                                <option value='No Filter'>No Filter</option>
                                <option value='All'>All</option>
                                <option value='Some'>Some</option>
                                <option value='None'>None</option>
                             </select>
                         </div>
                     </div>
                 </form>
            </div>
        );
    }
}