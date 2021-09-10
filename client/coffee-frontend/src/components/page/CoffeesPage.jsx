import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCoffeeById } from '../../redux/features/Coffe';
//по категориям кофе

function CoffeesPage() {
  /*===============================================================================*/
  const { id } = useParams()
  const { loadCoffeeByCategory, loadPage } = useSelector(state => state.coffee)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCoffeeById(id))
  },[id])


  if(loadPage) {
    return (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }

  if(loadCoffeeByCategory.length === 0) {
    return (
      <div>
        <p>Пока кофе нет</p>
      </div>
    )
  }
/*=====================================================================*/


  return (
    <div className={"byCategory"}>
      {loadCoffeeByCategory.map((item) => {
        return (
          <div className="card byCategoryMrg" style={{width: "40rem" }}>
            <img src={item.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <a href="#" className="btn btn-primary">Купить</a>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default CoffeesPage;