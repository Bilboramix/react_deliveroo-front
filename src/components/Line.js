import { useState, useEffect } from "react";

const Line = ({ item, clickOnMeal }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("trigger");
    setCounter(counter + clickOnMeal);
  }, [clickOnMeal]);

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
      <p className="item-price">{item.price} €</p>
    </>
  );
};

export default Line;
