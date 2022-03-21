import * as authService from '../services/authService.js';
export const logoutPage = (ctx) => {
    authService.logout();
}