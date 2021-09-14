import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { loadCoffeeById,  } from '../../redux/features/Coffe';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardId from "../Card/CardId";
import CardId from '../Card/CardId';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop:30,
    marginRight:85
  },
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'start'
  }
})

function CoffeePageByCategory(props) {
  const classes = useStyles();
  const { loadCategory } = useSelector(state => state.coffee)
  const { id } = useParams()
  const { loadCoffeeByCategory, loadPage } = useSelector(state => state.coffee)
  const dispatch = useDispatch()


  const [open, setOpen] = React.useState(false);
  const { loadCoffee} = useSelector((state) => state.coffee);
  const [coffee, setCoffee] = useState({})
  const handleClickOpen = (id) => {
    setCoffee(loadCoffee.find(item => item._id === id))
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(loadCoffeeById(id))
  }, [id])

  if(loadPage) {
    return  (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }

  if(loadCoffeeByCategory.length === 0) {
    return (
      <div style={{textAlign:'center'}}>
        <h2 style={{paddingTop:80}}>Нет в наличии</h2>
      </div>
    )
  }



  return (
    <div className={classes.main}>
      {loadCoffeeByCategory.map((item) => {
      return (
          <Card className={classes.root} >
            <CardActionArea onClick={()=> handleClickOpen(item._id)}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={item.image}
                title="Contemplative Reptile"
                style={{padding:15, borderRadius:25}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" noWrap>
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" style={{margin:'auto', padding: '10px 120px'}} >
                В корзину
              </Button>
            </CardActions>

          </Card>
      )
    })}
      {open ? (
        <CardId
          name={coffee.name}
          description={coffee.description}
          image={coffee.image}
          volume={coffee.volume}
        />
      ) : (
        ""
      )}</div>
  )}

export default CoffeePageByCategory;