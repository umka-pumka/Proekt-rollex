import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, updateItemQuantity, clearCart } from "../../app/redux/slices/cartSlice"; 
import { toast } from "react-toastify";
import "./cart.css";
import cardImage from "../../shared/assets/card.png";

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const handleRemoveItem = (id) => {
        dispatch(removeItemFromCart({ id }));
        toast.info("Товар удален из корзины");
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateItemQuantity({ id, quantity }));
    };

    const handleClearCart = () => {
        if (window.confirm("Вы уверены, что хотите очистить корзину?")) {
            dispatch(clearCart());
            toast.warn("Корзина очищена");
        }
    };
    const truncateText = (text) => {
        return text.split(' ').slice(0, 3).join(' ') + (text.split(' ').length > 5 ? '...' : '');
    };
    // const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Корзина</h2>
            {items.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={cardImage} alt="Card" />
                                <div className="cart-item-details">
                                    <div className="item-info">
                                        <h5>{truncateText(item.title)}</h5>
                                        
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                        />
                                    </div>
                                    <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                       
                        <button onClick={handleClearCart}>Очистить корзину</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
