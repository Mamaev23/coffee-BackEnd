import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { loadCoffeeById } from '../../redux/features/Coffe';

function CoffeePageByCategory(props) {
  const { id } = useParams()
  const { loadCoffeeByCategory, loadPage } = useSelector(state => state.coffee)
  const dispatch = useDispatch()

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
      <p>кофе нет</p>
    )
  }


  return (
    <div>{loadCoffeeByCategory.map((item) => {
      return (
        <p>{item.name}</p>
      )
    })}</div>
  );
}

export default CoffeePageByCategory;