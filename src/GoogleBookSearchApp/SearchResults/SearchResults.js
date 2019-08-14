import React, {Component} from 'react';
import './SearchResults.css';

export default class SearchResults extends Component {

    static defaultProps = {
        books: []
    }



    render(){

        const books = this.props.books.map((book) => {

            const {volumeInfo} = book;

            return (
                <li 
                    className='book'
                    key={book.id}
                >
                    <div className='book-img'>
                        <img src={ (volumeInfo.hasOwnProperty('imageLinks')) ? volumeInfo.imageLinks.smallThumbnail : 'https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg'} />
                    </div>
                    <div className='book-info'>
                        {volumeInfo.hasOwnProperty('canonicalVolumeLink') 
                            ? (
                                <a 
                                    href={volumeInfo.canonicalVolumeLink}
                                    target='_blank'
                                >
                                    <h3>{volumeInfo.title}</h3>
                                </a>
                            )
                            : (
                                <h3>{volumeInfo.title}</h3>
                            )
                        }
                        {volumeInfo.hasOwnProperty('subtitle') && (
                            <h4>{volumeInfo.subtitle}</h4>
                        )}
                        {volumeInfo.hasOwnProperty('description') && (
                            <p className='book-description'>
                                <h4>Description</h4>
                                {volumeInfo.description}
                            </p>
                        )}
                    </div>
                    
                </li>
            )
        })

        return (
            <div className='SearchResults'>
                <ul className='books-found'>
                    {books}
                </ul>
            </div>
        );
    }

}