import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { loadingCoffee } from '../../redux/features/Coffe';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    maxHeight:290
  },
  media: {
    height: 110,
    marginLeft: 55
  },
  buy1: {
    display: 'grid'
  },
  main1: {
    padding: 30
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
  descript:{
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
    textAlign: 'center'
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
  }
});

const Cart = () => {
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [opened, setOpened] = useState(false);
  const classes = useStyles()
  //=========================НЕТРОГАТЬ==========================================

  const { loadCoffee, loadPage } = useSelector(state => state.coffee)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadingCoffee())
  }, [])

  //localState to search
  const [value, setValue] = useState("")
  const fltr = loadCoffee.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })

  if(loadPage) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }
  //===========================НЕТРОГАТЬ=============================================


  return (
    <div className={classes.main1}>
      <input type="text" className={"inputSearch"} onChange={(e) => setValue(e.target.value)}/>
      {fltr.map((item) => {
        return (
          <Card className={classes.root}>
            <CardActionArea>
              <img src={item.image} className={classes.media} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  jgbcf
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.buy1}>
              <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Купить
              </Button>

              {/*====================================================================*/}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title" className={classes.title}>{"Оформление заказа"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description" className={classes.main}>
                    <div>
                      <img className={classes.image} src={item.image}/>
                      <div className={classes.countered}>
                        <button className={classes.buttons1} onClick={minus}>-</button>
                        {counter}
                        <button className={classes.buttons1} onClick={plus}>+</button>
                      </div>
                    </div>
                    <DialogActions>
                    </DialogActions>
                    <div className={classes.description}>
                      <h2 className={classes.name}>{item.name}</h2>
                      <h4 className={classes.descript}> - 3кг сахара</h4>
                      <h4 className={classes.descript}> - {item.volume}мл</h4>
                      <h4 className={classes.descript}> - 40г кокоина</h4>
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <div className={classes.buttons}>
                    <h3 className={classes.price}>{sum}$</h3>
                    <Button variant="contained" color="primary" className={classes.buy}>
                      Купить
                    </Button>
                  </div>
                </DialogActions>
              </Dialog>
            </CardActions>
          </Card>
        )
      })}
    </div>
  );
};

export default Cart;