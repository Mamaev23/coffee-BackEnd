import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardId from './CardId';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { loadingCoffee } from "../../redux/features/Coffe";
import { useParams } from "react-router-dom";
import { addCoffeeToCart, loadUserById } from '../../redux/features/Basket';



const useStyles = makeStyles({
  root: {
    width: 230,
    height: 290,
    margin: 30,
    padding: "20px 0px",
  },
  media: {
    width: 190,
    height: 128,
    borderRadius: 10,
  },
  buy1: {
    display: "grid",
  },
  main1: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    height: "170px",
    borderRadius: "10px",
  },
  description: {
    width: "950px",

  },
  name: {
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "black",
  },
  descript: {
    width: "350px",
    fontSize: "14px",
    color: "black",
  },
  price: {
    color: "darkgreen",
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    width: "450px",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "70px",
  },
  buy: {
    height: "33px",
    width: "120px",
    outline: "none",
    border: "none",
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      border: "black",
    },
  },
  title: {
    marginLeft: 167,
  },
  countered: {
    margin: "auto",
    width: 70,
    justifyContent: "space-between",
    backgroundColor: "#f3f3f7",
    borderRadius: 10,
    paddingLeft: 8,
    paddingRight: 8,
    display: "flex",
    marginTop: 30,
  },
  buttons1: {
    outline: "none",
    border: "none",
    backgroundColor: "#f3f3f7",
  },
  titleOne: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const Cards = () => {
  const [open, setOpen] = React.useState(false);
  const [coffee, setCoffee] = useState({})


  const classes = useStyles();
  //=========================НЕТРОГАТЬ==========================================

  const { loadCoffee, loadPage } = useSelector((state) => state.coffee);
  const dispatch = useDispatch();
  const handleClickOpen = (id) => {
    setCoffee(loadCoffee.find(item => item._id === id))
    setOpen(!open);
  };

  const { id } = useParams();

  const handleAddCoffee = (id) => {
    dispatch(addCoffeeToCart(id));
  }


  useEffect(() => {
    dispatch(loadingCoffee(id));
  }, [id]);


  useEffect((id) => {
    dispatch(loadUserById(id))
  }, [dispatch])
  if (loadPage) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  //===========================НЕТРОГАТЬ=============================================

  return (
    <div className={classes.main1} >
      {loadCoffee.map((item) => {
        return (
          <Card className={classes.root} >
            <CardActionArea onClick={()=> handleClickOpen(item._id)}>
              <img src={item.image} className={classes.media} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {item.name}
                </Typography>
                <Typography
                  noWrap
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.buy1}>
              {/*<Button*/}
              {/*  variant="outlined"*/}
              {/*  color="primary"*/}
              {/*  onClick={() => {*/}
              {/*  handleAddCoffee(id);*/}
              {/*}}*/}
              {/*>*/}
              {/*  Купить*/}
              {/*</Button>*/}
              {/*====================================================================*/}

            </CardActions>
          </Card>
        );
      })}
      {open ? (
        <CardId
          name={coffee.name}
          description={coffee.description}
          image={coffee.image}
          volume={coffee.volume}
          id={coffee._id}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Cards;