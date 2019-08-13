import React, {Component} from 'react';
import './SearchResults.css';

export default class SearchResults extends Component {

    static defaultProps = {
        apiResponse: ''
    }

    render(){

        return (
            <div className='SearchResults'>
                <div className='book'>
                    <div className='book-image'>
                        <img 
                            src='book.url'
                            alt='book-name cover'
                        />
                    </div>
                    <div className='book-info'>
                        <h3 className='book-title'>
                            Book-Name
                        </h3>
                    </div>
                </div>
            </div>
        );
    }

}