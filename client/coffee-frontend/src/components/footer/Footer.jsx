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
    backgroundColor: "grey",
    height: 80
  },
  flex: {
    display: "flex"
  },
  shrift: {
    color: 'white',
    fontSize: 20,
    textDecoration: 'none'
  },
  icons: {
    fontSize: 40,
    color: "wheat",
    "&:hover": {
      color: "red",

    },
  },
  pust: {
    marginTop: 10
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container>
        <Grid container>
          <Grid item xs={2}>
            <div><Link className={classes.shrift}>О нас</Link></div>
            <div><Link className={classes.shrift}>Поддержка</Link></div>
          </Grid>
          <Grid item xs={4} className={classes.shrift}>
            <div><Link className={classes.shrift}>Доставка</Link></div>
            <div><Link className={classes.shrift}>Самовызов</Link></div>
          </Grid>
          <Grid item  xs={4}/>
          <Grid item xs={2} spacing="flex-end" >
            <div className={classes.pust}></div>
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