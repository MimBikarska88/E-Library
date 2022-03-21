const baseUrl = 'http://localhost:3030/users/login';
import page from '../../node_modules/page/page.mjs';
const save = (user) => {
    if (user) {
        localStorage.setItem('_id', user._id);
        localStorage.setItem('password', user.password);
        localStorage.setItem('email', user.email);
        localStorage.setItem('accessToken', user.accessToken);
    }
}
export const login = (email, password) => {
    return fetch(baseUrl, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
        .then(user => {
            save(user);
            page.redirect('/');
        });
}
export const isAuthenticated = () => {
    let accessToken = localStorage.getItem('accessToken');
    return Boolean(accessToken);
}
export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('_id');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    page.redirect('/');
    alert('You logged out successfully!');

}