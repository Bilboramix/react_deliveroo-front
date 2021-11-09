import Line from "./Line";
const Cart = ({ cartContent, setCartContent, setClickOnMeal, clickOnMeal }) => {
  return (
    <div className="cart">
      <button className="validate">Valider mon panier</button>
      {cartContent.length === 0 && <p>Votre panier est vide</p>}
      {cartContent.length > 0 &&
        cartContent.map((item, index) => {
          return (
            <div key={item.id} className="cart-content">
              <div className="line">
                <Line setClickOnMeal={setClickOnMeal} clickOnMeal={clickOnMeal} item={item} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
