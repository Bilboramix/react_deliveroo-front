import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Line = ({ cartContent, setCartContent }) => {
  return (
    <>
      {cartContent.map((item, index) => {
        return (
          <div key={item.id} className="cart-content">
            <div className="line">
              <div className="counter">
                <FontAwesomeIcon
                  onClick={() => {
                    const newCart = [...cartContent];
                    newCart[index].quantity = cartContent[index].quantity - 1;
                    setCartContent(newCart);
                    if (item.quantity < 1) {
                      const newCart = [...cartContent];
                      newCart.splice(index, 1);
                      setCartContent(newCart);
                    }
                  }}
                  icon="minus-circle"
                />
                <span className="quantity">{item.quantity}</span>

                <FontAwesomeIcon
                  onClick={() => {
                    const newCart = [...cartContent];
                    newCart[index].quantity = cartContent[index].quantity + 1;
                    setCartContent(newCart);
                  }}
                  icon="plus-circle"
                />
              </div>
              <p className="item-title">{item.title}</p>
              <p className="item-price">{(item.price * item.quantity).toFixed(2)} €</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Line;
