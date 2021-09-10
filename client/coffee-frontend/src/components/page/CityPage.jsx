//9665640c3e0c2f11fd331d21f3755c1c --------не удаляй, он пригодиться для отправки запроса списка городов
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingCities } from '../../redux/features/Coffe';

function CityPage() {
  /*============================================================*/
  const { loadCity } = useSelector(state => state.coffee)
  const dispatch = useDispatch()

  const objCity = Object.values(loadCity)


  useEffect(() => {
    dispatch(loadingCities())
  }, [])
/*===============================================================*/


  return (
    <>
      {objCity.map((item) => {
        return (
          <p>{item.name}</p>
        )
      })}
    </>
  );
}

export default CityPage;