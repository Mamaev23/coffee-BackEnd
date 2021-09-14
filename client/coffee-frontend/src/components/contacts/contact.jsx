import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main:{
    paddingTop:30,
    display:'flex',
    justifyContent: 'space-between'
  },
  contact:{
    marginTop:40
  },
  link:{
    marginTop:150,
    fontSize:50,
    display: 'flex',
    justifyContent: 'space-between'
  }
})


function Contact(props) {
  const classes = useStyles();
  return (
    <>
     <div className={classes.main}>
       <iframe
         src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac1cffb92324921eaba6ef18598ec7e562cb6e24e0e7082ea0e947ecd0b705bf7&amp;source=constructor"
         width="720" height="420" frameBorder="0" style={{borderRadius:15, boxShadow:'#00000073 5px 0px 5px;'}}></iframe>
       <div>
       <h3>Адрес:</h3>
      <h4> г. Грозный, улица Геннадия Трошева, 7</h4>
         <div className={classes.contact}>
           <h3>Номер для жалоб:</h3>
           <h4><a href="tel:+7 (8142) 33 22 11" style={{textDecoration:'none', color:'darkgreen'}}><i className="fas fa-phone-alt"></i>  +7(8142) 33 22 11</a></h4>
         </div>
         <div className={classes.link}>
           <a href="https://www.instagram.com/" style={{color: '#845426'}}>
           <i className="fab fa-instagram-square"></i>
           </a>
           <a href="https://ru-ru.facebook.com/" style={{color: '#845426'}}>
             <i className="fab fa-facebook-square"></i>
           </a>
           <a href="https://web.telegram.org/z/" style={{color: '#845426'}}>
             <i className="fab fa-telegram"></i>
           </a>
         </div>
       </div>
     </div>
    </>
  );
}

export default Contact;