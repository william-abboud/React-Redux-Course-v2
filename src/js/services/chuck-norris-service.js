const URL = `https://api.icndb.com/jokes`;

export function getAllChuckNorrisJokes() {
    return new Promise((resolve, reject) => {
        return fetch(URL)
        .then(res => res.json())
        .then(data => resolve(data.value))
        .catch(e => reject(e));
    });
}