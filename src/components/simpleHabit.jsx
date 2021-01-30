import React, { useCallback, useState } from 'react';
import '../app.css';

// import React from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
