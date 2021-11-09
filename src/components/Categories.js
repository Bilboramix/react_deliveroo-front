import Meals from "./Meal";
const Categories = ({ data, cartContent, setCartContent, setClickOnMeal, clickOnMeal }) => {
  return (
    <>
      {data.categories.map((category, index) => {
        return (
          <>
            {index < 6 && (
              <div key={index} className="category">
                <h2>{category.name}</h2>
                <div className="meals">
                  <Meals setClickOnMeal={setClickOnMeal} clickOnMeal={clickOnMeal} cartContent={cartContent} setCartContent={setCartContent} meals={data.categories[index].meals} />
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default Categories;
