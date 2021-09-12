import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  iconLink:{
    border: 'none',
    outline:'none',
    backgroundColor: '#faf3d200',
    width: '100%',
    color: 'black',
    textDecoration: 'none',
    display:'block',
    padding:5,
    "&:active": {
      transition: 0.3,
      borderRadius: 50,
      backgroundColor: '#f1f1f1'
    }
  }
})

function Cart() {
  const classes = useStyles()
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <button className={classes.iconLink} onClick={() => setOpened(true)}>
        <i className="fas fa-shopping-cart" style={{ fontSize: 18, margin: '0px 16px', color: "#845426" }}/>
      </button>
      <opened opened={opened} setOpened={setOpened} />
    </div>
  );
}

export default Cart;