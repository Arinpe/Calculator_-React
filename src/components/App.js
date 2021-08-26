import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Navbar from './nvbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ButtonName) {
    this.setState(data => calculate(data, ButtonName));
  }

  render() {
    /* eslint-disable */ 
    const { total, next, operation } = this.state;
    const result = next || total || '0';
        /* eslint-enable */
    return (
      <div>

        <>
          <Navbar />
          <div className="seperate">

            <h1> LET S DO SOME MATH</h1>
            <div>
              <Display total={result.toString()} />
              <ButtonPanel clickHandler={this.handleClick} />
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default App;
