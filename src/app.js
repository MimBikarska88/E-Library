import page from '../node_modules/page/page.mjs';
import { homePage } from './views/homeView.js';
import { registerPage } from './views/registerView.js';
import { loginPage } from './views/loginView.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { logoutPage } from './views/logoutView.js';
import { createPage } from './views/createView.js';

page(renderMiddleware);
page(authMiddleware);

page('/', homePage);
page('/register', registerPage);
page('/login', loginPage);
page('/logout', logoutPage);
page('/create', createPage);
page.start();