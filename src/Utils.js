export const fetchMovies = async () => {
  let response = await fetch('https://swapi.dev/api/films/')
  let data = await response.json()
  return data.results
}

export const fetchCharacters = async (url) => {
  let response = await fetch(url)
  let data = await response.json()
  return data
}

export const debounce = (func, wait) => {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
