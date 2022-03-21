const baseURL = 'http://localhost:3030/jsonstore/collections/books';

export const getAll = () => {
    return fetch(baseURL).then(res => res.json());
}
export const createNewBook = (title, author, img) => {
    return fetch(baseURL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author, title, img })
    }).then(res => res.json());
}