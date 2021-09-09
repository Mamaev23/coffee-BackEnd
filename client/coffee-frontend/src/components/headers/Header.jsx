import React, { useState } from 'react'
import "../styles/style.css"
import Category from './Category'
import PhotoCarousel from './PhotoCarousel'
import Modals from '../modals/Modals'



function Header () {

  const [modalActive, setModalActive] = useState()
  return (
    <div className={"container"}>
      <div className="header">
        <div className={"logo-desc"}>
          <div className="header__desc">
            <h5 className="desc">Доставка кофе</h5>
          </div>
        </div>
        <div className="header__button">
          <a href="#" className={"user"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                 className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
          </a>
          <button className={"buttons mrgn"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-compass"
                 viewBox="0 0 16 16">
              <path
                d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
            </svg>
          </button>
          <button className="cart" onClick={() => setModalActive(true)}>
            <a to={"/user/cart"} className={"cart__link"}>Корзина</a>
          </button>
        </div>
      </div>
      <Category/>
      <PhotoCarousel/>
      <Modals active={modalActive} setActive={setModalActive}>
        <h1 className={"cart__title"}>Корзина</h1>
        <div className="cart__content">
          <div className="cart__img__block">
            <img className={"cart__image"} src="#" alt=""/>
          </div>
          <div className="cart__content__desc">
            <h2 className="cart__content__title"></h2>
          </div>
        </div>
      </Modals>
    </div>
  )
}

export default Header