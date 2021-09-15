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

  case "delete/coffee/fulfilled":
    return {
      ...state,
      basketUser: [
        ...state.basketUser,
        {
         id: "",
         coffeeId: "",
         amount: ""
        }
      ]
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
      dispatch({type: "add/coffee/fulfilled"})
    })
  }
}

export const deleteCoffeeFromCart = (id) => {
  console.log(id)
  return (dispatch) => {
    fetch(`http://localhost:4000/addCoffeeToCart/613e0a0725b12bced5b7da32`, {
      method: "DELETE",
      body: JSON.stringify({coffeeId: id}),
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "delete/coffee/fulfilled"})
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
    fetch(`http://localhost:4000/user/613e0a0725b12bced5b7da32`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "get/basket/fulfilled", payload: data })
    })
  }
}