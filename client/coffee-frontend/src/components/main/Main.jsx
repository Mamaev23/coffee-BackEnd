import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from '../Card/Cards';


const useStyles = makeStyles({
  main:{
    height: "100vh",
    marginTop: 80,
    textAlign:'center'
  },
  content: {
    display: 'flex'
  }
})

function Main() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <h2>Новинки</h2>
        <div className={classes.content}>
             <Cards />
        </div>
    </div>
  );
}

export default Main;