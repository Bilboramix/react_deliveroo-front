import Meals from "./Meal";
const Categories = ({ data }) => {
  return (
    <>
      {data.categories.map((category, index) => {
        return (
          <>
            {index < 6 && (
              <div className="category">
                <h2>{category.name}</h2>
                <div className="meals">
                  <Meals meals={data.categories[index].meals} />
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
