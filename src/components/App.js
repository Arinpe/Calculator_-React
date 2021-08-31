/* eslint-disable no-unused-vars */
import React, { useState, Component, Fragment } from 'react';
import ButtonPannel from './ButtonPanel';
import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculate';

const buttons = [
  'AC',
  '+/-',
  '%',
  '/',
  '9',
  '8',
  '7',
  '*',
  '6',
  '5',
  '4',
  '+',
  '3',
  '2',
  '1',
  '-',
  '0',
  '.',
  '=',
];
class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      prev: '0',
      next: '0',
      operator: null,
    };
  }

  handledisplay = (prev, next, tot, op) => {
    let ans;
    if (tot) {
      ans = tot;
    } else if (!op) {
      ans = prev;
    } else {
      ans = next;
    }
    return ans;
  };

  handleClick = e => {
    const {
      total, next, operator, prev,
    } = this.state;
    const res = calculate(
      {
        total,
        next,
        operator,
        prev,
      },
      e.target.value,
    );

    this.setState({
      ...res,
    });
  };

  render() {
    const {
      prev, next, total, operator,
    } = this.state;
    return (
      <>
        <div className="App">
          <div className="Appcalculator">
            <Display
              current={this.handledisplay(prev, next, total, operator)}
            />
            <ButtonPannel>
              {buttons.map(button => {
                const operators = ['+', '-', '*', '/', '%', 'X²'];
                const isOperator = operators.includes(button);
                const isAcBtn = button === 'AC';
                return (
                  <Button
                    onClick={this.handleClick}
                    key={button}
                    name={button}
                    operator={isOperator}
                    acBtn={isAcBtn}
                  />
                );
              })}
            </ButtonPannel>
          </div>
        </div>
      </>
    );
  }
}

export default App;
