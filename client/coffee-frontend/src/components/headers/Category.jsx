import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Category () {
  return (
    <div>
      <div className="category__block">
        <h2 className="category">Mild Coffee</h2>
        <h2 className="category">Brazilian Coffee</h2>
        <h2 className="category">Combura Coffee</h2>
      </div>
    </div>
  )
}

export default Category