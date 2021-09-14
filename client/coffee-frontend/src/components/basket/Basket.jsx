import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import BasketMain from './BasketMain';


const useStyles = makeStyles({
icon: {
  border: "none",
  backgroundColor: "white"
}
})



const Basket = () => {

  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(false)
  }

  const classes = useStyles()

  return (
    <>
    <div>
      <button className={classes.icon} onClick={() => handleOpen(true)}>{<ShoppingCartIcon/>}</button>
    </div>
      {open===false ? <BasketMain setOpen={setOpen}/> : ""}
    </>
  );
};

export default Basket;