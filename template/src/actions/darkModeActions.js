export const getMode = () => localStorage.getItem('darkMode') === true

export const setMode = mode => localStorage.setItem('darkMode', mode)
