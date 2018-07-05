const API_URL = 'https://swapi.co/api/people';

export function getStarWarsCharacters(page = 1) {
    return fetch(`${API_URL}/?page=${page}`)
        .then((res) => res.json())
        .catch((error) => console.error(error));
}