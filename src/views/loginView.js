import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';

const loginTemplate = (loginHandler) => html `<div class="w-50" style="margin:auto;padding-top:100px">
<form @submit=${loginHandler}>
<div class="form-group">
  <label for="exampleInputPassword1">Email</label>
  <input name="email" type="text" class="form-control" id="exampleInputPassword1" placeholder="Email address">
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form></div>`;
export const loginPage = (ctx) => {

    const loginHandler = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let email = formData.get('email');
        let password = formData.get('password');
        authService.login(email, password);
    }
    ctx.render(loginTemplate(loginHandler));
}