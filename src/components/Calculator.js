import React, { useState } from 'react';
import ButtonPannel from './ButtonPanel';
import Display from './Display';

const Calculator = () => {
  const [calcState, setCalcState] = useState({
    total: '',
    prev: '0',
    next: '0',
    operator: '',
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
    return ans ? ans.toString() : prev.toString();
  };
  const {
    prev, next, total, operator,
  } = calcState;
  const updateValue = val => setCalcState(val);
  return (
    <>
      <div className="App">
        <div className="App__calculator">
          <Display current={handledisplay(prev, next, total, operator)} />
          <ButtonPannel
            prev={prev}
            next={next}
            total={total}
            operator={operator}
            updateValue={updateValue}
          />
        </div>
      </div>
    </>
  );
};

export default Calculator;
