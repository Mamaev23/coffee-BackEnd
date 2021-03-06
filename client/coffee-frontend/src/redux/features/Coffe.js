const initialState = {
  loadCoffee: [],
  loadCategory: [],
  loadCoffeeByCategory: [],
  randomCoffee: [],
  loadPage: true,
}

export default function coffee (state = initialState, action) {
  switch (action.type) {
    case "load/randomCoffee/pending":
      return {
        ...state,
        randomCoffee: action.payload.coffeeRandom
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


//load Random Coffee

export const loadRandomCoffee = () => {
  return dispatch => {
    fetch("http://localhost:4000/randomCoffee")
    .then((res) => res.json())
    .then((coffeeRandom) => {
      dispatch({type: "load/randomCoffee/pending", payload: { coffeeRandom }})
    })
  }
}