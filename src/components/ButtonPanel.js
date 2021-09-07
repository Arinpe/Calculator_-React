import PropTypes from 'prop-types';
import Button from './Button';
import calculate from '../logic/calculate';

const buttons = [
  ['AC', '+/-', '%', '/'],
  ['9', '8', '7', '*'],
  ['6', '5', '4', '+'],
  ['3', '2', '1', '-'],
  ['0', '.', '='],
];

export default function ButtonPanel({ prev, next, total, operator, updateValue}) { 
  const   handleClick = e => {
    const res = calculate({
      total, next, operator, prev,
    }, e.target.value);
   
    updateValue({
      ...res,
    })
  };
  return <div className="button_panel">
    {buttons.map(group => (
                <div key={group} className="row">
                  {group.map(button => {
                    const operators = ['+', '-', '*', '/', '='];
                    const isOperator = operators.includes(button);
                    return (
                      <Button
                        onClick={handleClick}
                        key={button}
                        name={button}
                        color={isOperator}
                        wide={button === '0'}
                      />
                    );
                  })}
                </div>
              ))}</div>;
}

ButtonPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
