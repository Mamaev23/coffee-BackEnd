import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContex';

const Basket = () => {

  const {state, dispatch} = useContext(ShopContext)

  const hundlePlus = (id) => {
    dispatch({type: "plus", id})
  };

  const hundleMinus =(id) => {
    dispatch({type: "minus", id})
  }

  const hundleRemove = (id) => {
    dispatch({type: "remove", id})
  }

  const hundleSee = (id, amount) => {
    const product = state.coffee.find((item) => {
      if (item.id === id) {
        return item
      }
    })
    return (
      <tr key={product.id}>
        <td>
          <img src={product.image} alt=""/>
        </td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <div>
            <div><button onClick={() => hundlePlus(product.id)}>+</button></div>
            <div>{amount}</div>
            <div><button onClick={() => hundleMinus(product.id)}>-</button></div>
          </div>
          <td>
            <div><button onClick={() => hundleRemove(product.id)}>X</button></div>
          </td>
        </td>
      </tr>
    )
  }

  return (
    <div>
      <span>Закрыть</span>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Товар</th>
          <th>Кол-во</th>
          <th>Цена</th>
        </tr>
        </thead>
        <tbody>
        {state.length === 0 ? <div>Корзина пуста</div> : state.cartItems.map((item) => {
          return (hundleSee(item.coffeeId, item.id, item.amount))
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;