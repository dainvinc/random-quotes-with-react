import React from 'react';
import '../App.css';

class QuoteBox extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <p><i className="fa fa-quote-left" /> {this.props.quote}</p>
        </div>
        <div id="author">
          <p> -{this.props.author}</p>
        </div>
        <div className="quote-footer">
            <a
              id="tweet-quote"
              target="_blank" rel="noopener noreferrer" 
              href={`https://twitter.com/intent/tweet?text=${this.props.quote}`}>
                Tweet
            </a>
            <button id="new-quote" onClick={this.props.changeQuote}>New Quote</button>
        </div>
      </div>
    );

  }
}

export default QuoteBox;
