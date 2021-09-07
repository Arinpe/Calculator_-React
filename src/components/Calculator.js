import React, { Component, useState } from 'react';
import ButtonPannel from './ButtonPanel';
import Display from './Display';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    prev: '0',
    next: '0',
    operator: null,
  });

  const handledisplay = (prev, next, tot, op) => {
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
  const {
    prev, next, total, operator,
  } = state;

  const updateValue = val => setState(val);
  return (
    <>
      <div className="App">
        <div className="App__calculator">
          <Display current={handledisplay(prev, next, total, operator)} />
          <ButtonPannel prev={prev} next={next} total={total} operator={operator} updateValue={updateValue} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
