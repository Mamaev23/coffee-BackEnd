import React, { useState } from 'react';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cart: {
    backgroundColor: 'white',
    position: "absolute",
    right: 15,
    top: 42
  },
  cartButton: {
    position: 'relative',
  },
  cartHeader: {
    position: "absolute",
    display: 'flex',
    backgroundColor: "red",
    width: 150,
    justifyContent: 'space-between'
  }

})

const Cart = () => {
  const [opened, setOpened] = useState(false);
  const classes = useStyles()

  return (
    <>
      <div className={classes.cartButton} onClick={() => setOpened(true)}>
        {<LocalMallIcon/>}
      </div>
      {
        opened ? <div>
          <button onClick={() => setOpened(false)}>Закрыть</button>
          <div className={classes.cartHeader}>
            <div>#</div>
            <div>coffee</div>
            <div>количество</div>
          </div>
        </div> : ""
      }
        </>
);
      };

export default Cart;