import React , {Component} from 'react';
import './GoogleBookSearchApp.css';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import SearchResults from './SearchResults/SearchResults';

export default class GoogleBookSearchApp extends Component {
    
    static defaultProps={
        printFilters: [
            {'all' : 'All'},
            {'books' : 'Books'},
            {'magazines' : 'Magazines'}
        ],
        bookFilters: [
            {'no-filter': 'No Filters'},
            {'partial': 'Partial Book'},
            {'full': 'Full Book'},
            {'free-ebooks': 'Free E-books'},
            {'paid-ebooks': 'Paid E-books'},
            {'ebooks': 'E-books'}
        ],
    }

    constructor (props){
        super(props);
        this.state = {
            bookName : '',
            printType: 'all', // all is the default selection when page loads.
            bookType: 'no-filter', //No Filter is the default selection when the page loads. 
            searchResult: {
                books: []
            },
            totalItems: null,
            noResult: false,
            err : ''
        };
    }

    setBookName = (bookName) => {
        this.setState({
            bookName
        });
    }

    setPrintType = (printType) => {
        this.setState({
            printType
        });
    }

    setBookType = (bookType) => {
        this.setState({
            bookType
        });
    }

    setSearchResults = (book) => {
        let {books} = this.state.searchResult;
        books.push(book);
        this.setState({
            searchResult : {
                books
            }
        });
    }

    // returns the correctly formatted string for the fetch to work
    getFetchURL = () => {
        
        let {bookName, printType, bookType} = this.state;
        
        // replcae spaces with the '+' sign for correct formatting of the fetch url
        bookName = bookName.replace(/ /g, '+');
        const apiKey = 'AIzaSyCeUjXPOLeWPYMyb340WNt2bjxSTmNNDKw';

        let url = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${apiKey}&printType=${printType}`;

        if(bookType !== 'no-filter'){
            url += `&filter=${bookType}`;
        }

        return url;
    }
    
    handleSubmit = (e) => {

        e.preventDefault();
        const url = this.getFetchURL();

        fetch(url)
            .then((response) => {
                if(!response.ok){
                    throw new Error('Something went wrong, please try again')
                }
                return response.json();
            })
            .then((data) => {
                // set state of books to data only when it is a successful search
                if(data.totalItems > 0){
                    data.items.forEach((book) => {
                        const noResult = false;
                        this.setState({
                            totalItems: data.totalItems,
                            noResult
                        })
                        this.setSearchResults(book);
                    })
                }else{
                    const books = [];
                    const totalItems = null;
                    const noResult = true;
                    this.setState({
                        searchResult: {
                            books
                        },
                        totalItems,
                        noResult
                    });
                }
                
            })
            .catch((err) => {
                this.setState({
                    err : err.message
                })
            })
        
    }

    render(){


        const searchResult = this.state.totalItems
            ? <div className=''></div>
            : '';

        const noResult = this.state.noResult
            ? <div className=''>No Result Found</div>
            : '';

        const error = this.state.err
            ? <div className='Error'>{this.state.err}</div>
            : '';

        return (
            <div className='google_book_search_app'>
                <Header />
                <SearchForm 
                    printFilters={this.props.printFilters}
                    bookFilters={this.props.bookFilters}
                    printType={this.state.printType}
                    bookType={this.state.bookType}
                    setBookName={(val) => this.setBookName(val)}
                    setPrintType={(val) => this.setPrintType(val)}
                    setBookType={(val) => this.setBookType(val)}
                    handleSubmit={(e) => this.handleSubmit(e)}
                />
                {searchResult}
                {noResult}
                {error}
                <SearchResults />
            </div>
        );
    }
}