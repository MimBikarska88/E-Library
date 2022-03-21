import { html } from '../../node_modules/lit-html/lit-html.js';

const registerTemplate = () => html `<div class="w-50" style="margin:auto;padding-top:100px"><form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Username</label>
    <input name="username" type="text" class="form-control" id="exampleInputPassword1" placeholder="Username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form></div>`;

export const registerPage = (ctx) => {
    ctx.render(registerTemplate());
}