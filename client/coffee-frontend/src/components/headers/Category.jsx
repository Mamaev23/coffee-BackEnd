import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadingCategory } from '../../redux/features/Coffe';

function Category () {
  /*======================================================================*/
  const { loadCategory, loadPage } = useSelector(state => state.coffee)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadingCategory())
  },[])

  if(loadPage) {
    return (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }
  /*=========================================================================*/
  return (
    <div>
      <div className="category__block">
        {loadCategory.map((category) => {
          return (
            <Link to={`/category/${category._id}`} className="category">{category.name}</Link>
          )
        })}
      </div>
      <Link style={{color: "red"}} to="/changed/cities">Выбрать город</Link>
    </div>
  )
}

export default Category