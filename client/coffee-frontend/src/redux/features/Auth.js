const initialState = {
  token: localStorage.getItem("token"),
  error: null,
  signIn: false,
  candidate: null,
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case "logout/user/rejected":
      return {
        ...state,
        token: null,
        error: null,
        signIn: false
      }
    case "load/userDataSign/pending":
      return {
        ...state,
        signIn: true,
        error: null
      }
    case "load/errorDataSign/rejected":
      return {
        ...state,

      }
    case "load/errorData/rejected":
      return {
        ...state,
        error: action.error.obj.err
      }
    case "load/userData/pending":
      return {
        ...state,
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
      }else {
        dispatch({type: "load/errorData/rejected", error: { obj }})
      }
    })
  }
}


export const doLogin = (login, password) => {
  return dispatch => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({login, password}),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => {
      if(!data.error) {
        dispatch({type: "load/userDataSign/pending", payload: { data }})
        localStorage.setItem("token", data)
      }else {
        dispatch({type: "load/errorDataSign/rejected", error: { data }})
      }
    })
  }
}