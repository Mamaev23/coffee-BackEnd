const initialState = {
  user: {},
  token: localStorage.getItem("token"),
  error: null
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case "load/errorData/rejected":
      return {
        ...state,
        error: action.error.obj.err
      }
    case "load/userData/pending":
      return {
        ...state,
        user: action.payload.obj.newUser,
        token: action.payload.obj.token,
      }
    default:
      return state
  }
}











//thunk

export const loadingUserData = (firstName, lastName, login, password) => {
  return dispatch => {
    const data = {
      firstName,
      lastName,
      login,
      password,
      coffeeId: []
    }
    fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((obj) => {
      if(!obj.error) {
        dispatch({type: "load/userData/pending", payload: { obj }})
        localStorage.setItem("token", obj.token)
      }else {
        dispatch({type: "load/errorData/rejected", error: { obj }})
      }
    })
  }
}