import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Loading extends React.Component {
  render() {
    return (
      <div>
        <i className="fa fa-spinner fa-spin" />Loading...
      </div>
    );

  }
}

export default Loading;
