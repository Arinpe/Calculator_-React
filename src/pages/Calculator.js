import React from 'react';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ButtonName) {
    this.setState(data => calculate(data, ButtonName));
  }

  render() {
    const { total, next } = this.state;
    const result = next || total || '0';

    return (
      <div className="seperate">

        <h1> LET S DO SOME MATH</h1>
        <div>
          <Display total={result.toString()} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
