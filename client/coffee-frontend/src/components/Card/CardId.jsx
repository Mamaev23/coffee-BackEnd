import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import coffee, { loadingCoffee } from '../../redux/features/Coffe';
import { useParams } from 'react-router-dom';
import basket, { addCoffeeToCart, loadCoffee } from '../../redux/features/Basket';

const useStyles = makeStyles({
  root: {
    width: 230,
    height:290,
    margin: 30,
    padding: "20px 30px"
  },
  media: {
    width:170,
    height: 120,
    borderRadius: 10
  },
  buy1: {
    display: 'grid'
  },
  main1: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'space-between'
  },
  main:{

    display: "flex",
    justifyContent:"space-between",
  },
  image: {
    height:"170px",
    borderRadius: "10px"
  },
  description: {
    width: '950px',
    paddingLeft: "30px"
  },
  name:{
    fontFamily: "Arial",
    fontWeight: "bold",
    color: 'black'
  },
  descript: {
    width: '350px',
    fontSize: '14px',
    color: 'black'
  },
  price: {
    color: "darkgreen",
    fontWeight: 'bold',
  },
  buttons: {
    display: 'flex',
    width: '450px',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: "70px",
  },
  buy: {
    height: '33px',
    width: '120px',
    outline: 'none',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '10px',
    "&:hover": {
      color: 'black',
      backgroundColor: 'white',
      border: 'black'
    }
  },
  title: {
    marginLeft: 167
  },
  countered: {
    margin: 'auto',
    width: 70,
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f7',
    borderRadius: 10,
    paddingLeft: 8,
    paddingRight: 8,
    display: 'flex',
    marginTop: 30
  },
  buttons1: {
    outline: "none",
    border: 'none',
    backgroundColor: '#f3f3f7'
  },
  titleOne: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

function CardId({ name, description, image, volume, id}) {
  const classes = useStyles()

  const state = useState()
  const dispatch = useDispatch()

  const [sum, setSum] = useState(15)
  const [counter, setCounter] = useState(1)


  function plus() {
    setCounter(counter + 1)
    setSum(sum + 15)
  }
  function minus() {
    if(counter > 0) {
      setCounter(counter - 1)
      setSum(sum - 15)
    }
  }

  const [open, setOpen] = React.useState(true);

  const handleAddCoffee = (id) => {
    dispatch(addCoffeeToCart({ id }));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" className={classes.title}>{"Оформление заказа"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.main}>
            <div>
              <img className={classes.image} src={image}/>
              <div className={classes.countered}>
                <button className={classes.buttons1} onClick={minus}>-</button>
                {counter}
                <button className={classes.buttons1} onClick={plus}>+</button>
              </div>
            </div>
            <DialogActions>
            </DialogActions>
            <div className={classes.description}>
              <h2 className={classes.name}>{name}</h2>
              <h4 className={classes.descript}> - 3кг сахара</h4>
              <h4 className={classes.descript}> - {volume}мл</h4>
              <h4 className={classes.descript}> - 40г кокаина</h4>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className={classes.buttons}>
            <h3 className={classes.price}>{sum}$</h3>
            <Button variant="contained" color="primary" className={classes.buy} onClick={() => {
              handleAddCoffee(id);
            }}>
              Купить
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CardId;