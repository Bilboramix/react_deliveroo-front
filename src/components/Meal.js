import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = ({ meals }) => {
  return (
    <>
      {meals.map((meal, index) => {
        return (
          <div className="meal">
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
            {meal.picture && <img className="meal-pic" src={meal.picture} />}
          </div>
        );
      })}
    </>
  );
};

export default Meals;
