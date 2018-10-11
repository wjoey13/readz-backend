import React, { Component } from 'react';
import './App.css';
import Header from './components/header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      books: []
    };
  }
  componentDidMount() {
    this.getAuthor();
    this.getBooks();
  }
  getAuthor = () => {
    return fetch("https://readz-database.herokuapp.com/author")
      .then(result => result.json())
      .then(result =>
        this.setState({
          authors: result.data
        })
      );
  };

  getBooks = () => {
    return fetch("https://readz-database.herokuapp.com/books")
      .then(result => result.json())
      .then(result =>
        this.setState({
          books: result.data
        })
      );
  };

  render() {
    console.log(this.state.books)
  
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           
          </a>
        </header>
      </div>
    );
  }
}

export default App;
