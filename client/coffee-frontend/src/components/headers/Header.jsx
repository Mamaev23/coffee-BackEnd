import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { loadingCategory } from '../../redux/features/Coffe';
import Basket from '../basket/Basket';


const useStyles = makeStyles({
  main: {
    width: 1296,
    backgroundColor:'#ffffffe3',
    display: 'flex',
    alignItems: 'center',
    justifyContent:"space-between",
    paddingTop: 15,
    paddingBottom:15,
    boxSizing: 'border-box',
  },
nav:{
  width: '100%',
  color: 'black',
  textDecoration: 'none',
  display:'block',
  "&:hover":{
    color: 'black'
  }
},
nav1:{
    width: '100%',
  color: 'black',
  textDecoration: 'none',
  display:'block',
  padding: '4px 16px',
  "&:hover":{
    backgroundColor: '#0000000a',
    color: 'black'
  }
},
  logo:{
    width:65,
  },
  bar: {
    width: 450,
    display: 'flex',
    paddingTop: 15,
    justifyContent:"space-between",
    alignItems: "center"
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'theme.palette.background.paper',
  },
  nested: {
    display:'grid',
    padding: '8px 0px',
    paddingLeft: 'theme.spacing(4)',
    backgroundColor: 'white',
    color: 'white',
    position: 'absolute',
    zIndex: 2,
    borderRadius: '0px 0px 5px 5px',
    "&:hover":{
      backgroundColor: 'white'
    }
  },
  category1:{
    borderRadius: '65px 5px',
  },
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
  },
  navCategory: {
    color: 'black',
    textDecoration: 'none',
    paddingTop:10
  }

})

function Header () {
  const { loadCategory } = useSelector(state => state.coffee)
  const dispatch = useDispatch()




  useEffect(() => {
    dispatch(loadingCategory())
  }, [])



  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  }



  return (
   <div className={classes.main}>
     <img src="https://i.postimg.cc/wTrmVRGZ/Pngtree-hand-painted-brown-coffee-cup-3400766.png" className={classes.logo}/>
      <div className={classes.bar}>
        <ListItem button  className={classes.category1}>
          <a href="/"  className={classes.nav}>
          <ListItemText primary="Главная" />
          </a>
        </ListItem>
          <ListItem button  className={classes.category1}>
            <Link to="/contacts" className={classes.nav}>
            <ListItemText primary="Контакты" />
            </Link>
          </ListItem>
        <div>
        <ListItem button onClick={handleClick} className={classes.category1}>
          <ListItemText primary="Категория" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              {loadCategory.map((item) => {
                return (
                  <Link to={`/category/${item._id}`} className={classes.navCategory}>{item.name}</Link>
                )
              })}
            </ListItem>
          </List>
        </Collapse>
        </div>
        <Basket/>
        <Link to="/authorization">
          <i className="fas fa-user" style={{ fontSize: 18, margin: 16, color: "#845426" }}/>
        </Link>
        <Link to="/login">
          <i className="fas fa-user" style={{ fontSize: 18, margin: 16, color: "#845426" }}/>
        </Link>
   </div>
   </div>
  )
}

export default Header