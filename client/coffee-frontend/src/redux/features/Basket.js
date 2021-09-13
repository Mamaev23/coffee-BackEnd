const initialState = {
  loadCoffee: [],
  coffee: [],
  userById: []
}

export default function basket (state = initialState, action) {
switch (action.type) {
  // case "minus": {
  //   const findAmount = state.coffee.find(
  //     (item) => item.
  //   )
  // }
  case "add/coffee/fulfilled":
    return {
      ...state,
      coffee: action.payload.data,
    }

  case "get/basket/fulfilled":
    return {
      ...state,
      basket: action.payload.data
    }

  case "load/coffee/fulfilled":
    return {
      ...state,
      loadCoffee: action.payload.data
    }

  default:
    return state
}
}
export const addCoffeeToCart = () => {
  return ( dispatch ) => {
    fetch("http://localhost:4000/addCoffeeToCart", {
      method: "PATCH"
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "add/coffee/fulfilled", payload: data})
    })
  }
}

export const loadCoffee = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/coffee")
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "load/coffee/fulfilled", payload: data})
    })
  }
}

export const loadUserById = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/user/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "get/basket/fulfilled", payload: data })
    })
  }
}