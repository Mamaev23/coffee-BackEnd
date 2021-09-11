const initialState = {
  loadCoffee: [],
  loadCategory: [],
  loadCoffeeByCategory: [],
  loadCity: [],
  loadPage: true,
}

export default function coffee (state = initialState, action) {
  switch (action.type) {
    case "loading/cities/pending":
      return {
        ...state,
        loadCity: action.payload.data
      }
    case "loadCoffee/category/pending":
      return {
        ...state,
        loadCoffeeByCategory: action.payload.data,
        loadPage: false
      }
    case "load/category/pending":
      return {
        ...state,
        loadCategory: action.payload.category,
        loadPage: false
      }
    case "load/coffee/pending":
      return {
        ...state,
        loadCoffee: action.payload.data,
        loadPage: false
      }
    default:
      return state
  }
}


//thunk

export const loadingCategory = () => {
  return dispatch => {
    fetch("http://localhost:4000/categories")
    .then((res) => res.json())
    .then((category) => {
      dispatch({type: "load/category/pending", payload: { category }})
    })
  }
}



export const loadingCoffee = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/coffee")
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "load/coffee/pending", payload: { data }})
    })
  }
}


export const loadCoffeeById = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "loadCoffee/category/pending", payload: { data }})
    })
  }
}

// cities

export const loadingCities = () => {
  return dispatch => {
    fetch("https://htmlweb.ru/geo/api.php?country=ru&json&api_key=9665640c3e0c2f11fd331d21f3755c1c")
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "loading/cities/pending", payload: { data }})
    })
  }
}