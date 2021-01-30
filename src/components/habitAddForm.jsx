import React, { memo, useRef } from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <>
      <form ref={formRef} className="add-form" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className="add-input"
          type="text"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    </>
  );
});

export default HabitAddForm;
