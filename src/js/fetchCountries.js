// Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery),
//   возвращающей промис с массивом стран, результат запроса к API.

export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return Promise.reject(errorMessage);
      }
    })
    .then(data => data);
}
