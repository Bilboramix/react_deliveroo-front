import Line from "./Line";
const Cart = ({ cartContent, setCartContent }) => {
  let total = 0;
  const fee = 2.5;
  return (
    <div className="cart">
      <button className="validate">Valider mon panier</button>
      {cartContent.length === 0 && <p>Votre panier est vide</p>}
      {cartContent.length > 0 && (
        <div>
          <Line setCartContent={setCartContent} cartContent={cartContent} />
          <div className="sous-total">
            <p className="prices">
              <span>Sous-Total</span>
              {cartContent.forEach((item) => {
                total = total + item.price * item.quantity;
              })}
              <span>{total.toFixed(2)} €</span>
            </p>
            <p className="prices">
              <span>Frais de livraison</span>
              <span>{fee.toFixed(2)} €</span>
            </p>
          </div>
          <div className="total prices">
            <span>Total</span>
            <span>{(total + fee).toFixed(2)} €</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
