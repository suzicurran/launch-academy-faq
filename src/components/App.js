import React from 'react';
import FaqElement from './FaqElement';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {revealedKey: null};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (id != this.state.revealedKey) {
      this.setState({revealedKey: id});
    } else {
      this.setState({revealedKey: null});
    }
  }

  render () {
    let headerText = "We're here to help";
    let revealedAnswer;
    let revealedKey = this.state.revealedKey;
    let FaqElements = this.props.data.map(datum => {
      if (datum.id == revealedKey) {
        revealedAnswer = true;
      } else {
        revealedAnswer = false;
      }
      return (
        <FaqElement
        key={datum.id}
        id={datum.id}
        question={datum.question}
        answer={datum.answer}
        onClickFunction={this.handleClick}
        revealed={revealedAnswer} />
      );
    });

    return (
      <div className="app">
      <h1>{headerText}</h1>
      {FaqElements}
      </div>
    );
  }
}

export default App;
