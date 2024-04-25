const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, login: action.payload };

    default:
      return state;
  }
};

export default reducer;

// it is for learning, for login authentication the project has redux.
