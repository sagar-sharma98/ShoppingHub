import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

export const AuthContext = createContext();

const initialState = {
  login: false,
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

// it is for learning, for login authentication the project has redux.
