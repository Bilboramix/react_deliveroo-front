import { useState, useEffect } from "react";

const Line = ({ item }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {}, []);

  return (
    <>
      <div className="counter">
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <p className="item-title">{item.title}</p>
      <p className="item-price">{(item.price * counter).toFixed(2)} €</p>
    </>
  );
};

export default Line;
