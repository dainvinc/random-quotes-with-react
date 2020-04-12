import React from 'react';
import './App.css';
import axios from 'axios';
import QuoteBox from './components/QuoteBox';
import Loading from './components/Loading';

const api = 'https://api.quotable.io/random';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      author: 'Anonymous',
      quote: 'Patient is key'
    }

    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    this.changeQuote();
  }

  async changeQuote() {
    let response = await axios.get(api);

    this.setState({
      loading: false,
      author: response.data.author,
      quote: response.data.content
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          { this.state.loading ? <Loading /> 
            : <QuoteBox quote={this.state.quote} author={this.state.author} changeQuote={this.changeQuote}/>}

          <span className="creator"><i className="fa fa-heart" /> by Vishal</span>
        </header>
      </div>
    );

  }
  
}
export default App;
