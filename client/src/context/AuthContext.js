import {createContext} from 'react';

function noop () {}

export const AuthContext = createContext({
  token: null,
  usedId: null,
  login: noop,
  logout: noop,
  inAuthenticated: false
})
