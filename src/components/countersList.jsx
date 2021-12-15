import React from "react";
import Counter from "./counter";

const CountersList = () => {
  const counters = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 2, name: "Вилка" },
    { id: 3, value: 2, name: "Тарелка" },
    { id: 4, value: 2, name: "Набор минималиста" },
  ];
  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} value={count.value} name={count.name} />
      ))}
    </>
  );
};

export default CountersList;
