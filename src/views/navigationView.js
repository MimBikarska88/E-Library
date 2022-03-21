import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../../src/services/authService.js';


const navTemplate = (isAuthenticated) => html `<nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="/">E-Library</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
        </li>
        ${isAuthenticated ? authenticatedTemplate : nonAuthenticatedTemplate}
    </ul>
    <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</div>
</nav>`;
const authenticatedTemplate = html `
<li class="nav-item">
<a class="nav-link user" href="/logout">Logout</a>
</li>
<li class="nav-item">
<a class="nav-link  user" href="/create">Add New Book</a>
</li>
`;
const nonAuthenticatedTemplate = html ` <li class="nav-item">
<a class="nav-link guest" href="/login">Login</a>
</li>

<li class="nav-item guest">
<a class="nav-link" href="/register">Register</a>
</li>`;

export const navigationView = (ctx) => {
    return navTemplate(ctx.isAuthenticated);
}