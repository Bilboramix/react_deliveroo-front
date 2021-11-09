import Line from "./Line";
const Cart = ({ cartContent, setCartContent, setClickOnMeal, clickOnMeal }) => {
  const fee = 2.5;
  return (
    <div className="cart">
      <button className="validate">Valider mon panier</button>
      {cartContent.length === 0 && <p>Votre panier est vide</p>}
      {cartContent.length > 0 && (
        <div>
          {cartContent.map((item, index) => {
            return (
              <div key={item.id} className="cart-content">
                <div className="line">
                  <Line setClickOnMeal={setClickOnMeal} clickOnMeal={clickOnMeal} item={item} />
                </div>
              </div>
            );
          })}
          <div className="sous-total">
            <p className="prices">
              <span>Sous-Total</span>
              <span>Addition</span>
            </p>
            <p className="prices">
              <span>Frais de livraison</span>
              <span>{fee} €</span>
            </p>
          </div>
          <div className="total prices">
            <span>Total</span>
            <span>addition+fee</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
