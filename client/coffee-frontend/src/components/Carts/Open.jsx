import React, { useContext } from "react";
import styles from "./styles.module.css";
import TableCart from "./TableCart";

function Open({ opened, setOpened }) {
  const { state, dispatch } = useContext(ShopContext);

  const handleClose = () => {
    if (opened === true) {
      return setOpened(false);
    }
  };

  const handleIncrement = (id) => {
    dispatch({ type: "plus", payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "minus", payload: { id } });
  };

  const handleRemove = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  if (!opened) {
    return null;
  } else {
    if (state.cartItems.length === 0) {
      return (
        <div class={styles.wrapper}>
          <h3>В корзине нет товаров</h3>
          <span class={styles.closeButton} onClick={handleClose}>
            закрыть
          </span>
        </div>
      );
    } else {
      return (
        <div class={styles.wrapper} onClick={() => setOpened(false)}>
          <span class={styles.closeButton} onClick={handleClose}>
            закрыть
          </span>
          <TableCart
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleRemove={handleRemove}
          />
        </div>
      );
    }
  }
}

export default Open;