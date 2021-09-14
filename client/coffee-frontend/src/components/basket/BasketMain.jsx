import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import coffee from '../../redux/features/Coffe';


const useStyles = makeStyles({
  image: {
    width: 30,
  },
  main: {
    marginTop: 150,
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    left: 950,
    width: 420
  },
  main1: {
    display: 'flex',
  },
  main2: {
    marginLeft: 13
  },
  close: {
    position: "inherit",
    top: 5,
    right: 10,
    cursor: "pointer",
    opacity: 0.5,
    fontSize: 14,
  }
})

const BasketMain = (props) => {

  const classes = useStyles()

  const handleClose = () => {
    props.setOpen(true)
  }

  const state = useState()

  const userById = useSelector(state => state.basket.userById)



  const handleSee = (id, a, amount) => {

    const state = {
      coffee, userById
    }

    const coffee = state.coffee.find((item) => {
      if (item.id === id) {
        return item
      }
    })
    return (
      <tr key={coffee.id}>
        <td>{a}</td>
        <td>
          <img src={coffee.image} className={classes.image} alt="" />
        </td>
        <td>{coffee.name}</td>
        <td>
          <div>
            <div>{amount}</div>
          </div>
        </td>
        <td>{coffee.price}</td>
        <td>
        </td>
      </tr>
    );
  }
  const coffee = useSelector(state => state.basket.coffee)

  return (
      <Container className={classes.main}>
        <span className={classes.close} onClick={handleClose}>Закрыть</span>
        <table>
          <thead>
          <tr className={classes.main1}>
            <th className={classes.main2}>image</th>
            <th className={classes.main2}>name</th>
            <button className={classes.main2}>-</button>
            <th className={classes.main2}>amount</th>
            <button className={classes.main2}>+</button>
            <th className={classes.main2}>price</th>
          </tr>
          </thead>

        </table>
      </Container>
  );
};

export default BasketMain;