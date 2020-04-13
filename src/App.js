import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import axios from 'axios';
import QuoteBox from './components/QuoteBox';
import Loading from './components/Loading';
import { newQuote } from './actions';

const api = 'https://api.quotable.io/random';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    document.title = 'Random Quotes | Vishal'
    this.changeQuote();
  }

  async changeQuote() {
    let response = await axios.get(api);

    console.log(response.data);
    this.props.newQuote(response.data.content, response.data.author);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.props.loading ? <Loading /> 
            : <QuoteBox quote={this.props.quote} author={this.props.author} changeQuote={this.changeQuote} />
          }
          <span className="creator"><i className="fa fa-heart" /> by Vishal</span>
        </header>
      </div>
    );

  }
 
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    quote: state.quote,
    author: state.author
  }
};

export default connect(mapStateToProps, { newQuote })(App);
