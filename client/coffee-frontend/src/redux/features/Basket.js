import { stripLow } from 'validator';

const initialState = {
  loadCoffee: [],
  coffee: [
    {id: 1, coffeeId: 2, amount: 1}
  ],
  basketUser: []
}

export default function basket (state = initialState, action) {
switch (action.type) {
  case "load/user/fulfilled":
    return {
      ...state,
      basketUser: [
        ...state.basketUser,
        {

        }
      ]
    }
  case "add/coffee/fulfilled":
    return {
      ...state,
      basketUser: [
        ...state.basketUser,
        {
          id: state.basketUser.length + 1,
          coffeeId: action.id,
          amount: 1,
        },
      ],
    }

  case "load/coffee/fulfilled":
    return {
      ...state,
      loadCoffee: action.payload.data
    }

  case "get/basket/fulfilled":
    return {
      ...state,
      basketUser: [action.payload],
    };

  default:
    return state
}
}
export const addCoffeeToCart = (id) => {
  return ( dispatch ) => {
    fetch(`http://localhost:4000/addCoffeeToCart/${id}`, {
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
  return  async (dispatch) => {
    fetch(`http://localhost:4000/user/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "get/basket/fulfilled", payload: data })
    })
  }
}