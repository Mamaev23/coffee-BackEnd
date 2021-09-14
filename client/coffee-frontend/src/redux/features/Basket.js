import coffee from './Coffe';

const initialState = {
  loadCoffee: [],
  coffee: [
    {id: 1, coffeeId: 2, amount: 1}
  ],
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
      coffee: [
        ...state.coffee,
        {
          id: state.coffee.length + 1,
          coffeeId: action.id,
          amount: 1,
        },
      ],
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
export const addCoffeeToCart = (id) => {
  console.log(id)
  return ( dispatch ) => {
    fetch(`http://localhost:4000/addCoffeeToCart/613e0a0725b12bced5b7da32`, {
      method: "PATCH",
      body: JSON.stringify({coffeeId: id}),
      headers: {
        "Content-type": "application/json",
      },
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