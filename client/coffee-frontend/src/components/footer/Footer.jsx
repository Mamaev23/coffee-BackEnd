import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from  "@material-ui/icons/Telegram"
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Link} from "react-router-dom"
import LocalMallIcon from '@material-ui/icons/LocalMall';


const useStyles = makeStyles({
  box: {
    backgroundColor: "#ececee",
    borderRadius: '30px 30px 0px 0px',

    height: 80,
    backgroundColor: "black",
  },
  flex: {
    display: "flex"
  },
  shrift: {
    color: 'black',
    fontSize: 20,
    textDecoration: 'none'
  },
  icons: {
    fontSize: 40,
    color: "darkred",
    "&:hover": {
      color: "red",

    },
  },
  pust: {
    marginTop: 10
  },
logo:{
    width:65,
    fontcolor: 'white'
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container className={classes.main} >
        <Grid container className={classes.container}>
          <Grid item xs={3}>
            <div className={classes.shrift}>COFFEE ©2021</div>
          </Grid>
          <Grid item xs={3} >
            <Grid container>
              <div><Link href="https://www.instagram.com/myxammad.13/" target="_blank" >{<InstagramIcon className={classes.icons}/>}</Link></div>
              <div><Link href="https://www.facebook.com/coffee" target="_blank" className={classes.shrift}>{<FacebookIcon className={classes.icons}/>}</Link></div>
              <div><Link href="https://web.telegram.org/z/#-1154410942" target="_blank" className={classes.shrift}>{<TelegramIcon className={classes.icons}/>}</Link></div>
              <div><Link href="https://www.youtube.com/user/nescaferu" target="_blank" className={classes.shrift}>{<YouTubeIcon className={classes.icons}/>}</Link></div>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;