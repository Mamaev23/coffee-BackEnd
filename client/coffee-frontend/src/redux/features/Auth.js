const initialState = {
  user: {},
  token: localStorage.getItem("token"),
  isAuth: false
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
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
    .then((token) => {
      localStorage.setItem("token", token)
    })
  }
}