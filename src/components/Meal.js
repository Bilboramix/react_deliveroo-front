import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = ({ meals, cartContent, setCartContent, setClickOnMeal, clickOnMeal }) => {
  const handleCart = (meal) => {
    if (cartContent.indexOf(meal) === -1) {
      const newCart = [...cartContent];
      newCart.push(meal);
      setCartContent(newCart);
    } else {
      setClickOnMeal(1);
    }
  };
  return (
    <>
      {meals.map((meal, index) => {
        return (
          <div
            onClick={() => {
              handleCart(meal);
            }}
            key={meals[index].id}
            className="meal"
          >
            <div>
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <span className="price">{meal.price} €</span>
              {meal.popular && (
                <span className="popular">
                  <FontAwesomeIcon icon="star" />
                  Populaire
                </span>
              )}
            </div>
            {meal.picture && <img className="meal-pic" src={meal.picture} alt={meal.title} />}
          </div>
        );
      })}
    </>
  );
};

export default Meals;
