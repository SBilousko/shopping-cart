import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 2, name: "Вилка" },
    { id: 3, value: 2, name: "Тарелка" },
    { id: 4, value: 2, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newConters = counters.filter((c) => c.id !== id);
    setCounters(newConters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    const newCounter = counters.map((counter) => {
      if (counter.id === id) {
        counter.value += 1;
      }
      return counter;
    });
    setCounters(newCounter);
  };
  const handleDecrement = (id) => {
    const newCounter = counters.map((counter) => {
      if (counter.id === id) {
        counter.value -= 1;
      }
      return counter;
    });
    setCounters(newCounter);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          {...count}
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
