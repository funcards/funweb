export const isProduction = import.meta.env.PROD

export const appLongName = import.meta.env.VITE_APP_NAME_LONG
export const appShortName = import.meta.env.VITE_APP_NAME_SHORT

export const routes = Object.freeze({
  root: '/',
  auth: Object.freeze({ signIn: '/sign-in', signUp: '/sign-up', forgotPassword: '/forgot' }),
  board: Object.freeze({ list: '/boards', one: (id = ':boardId') => `/boards/${id}` }),
})
