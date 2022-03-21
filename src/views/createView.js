import { html } from '../../node_modules/lit-html/lit-html.js';
import { createNewBook } from '../services/bookService.js';
import page from '../../node_modules/page/page.mjs';

const CreateBookTemplate = (createBookHandler) => html `<div class="w-50" style="margin:auto;padding-top:100px">
<form @submit=${createBookHandler}>
<div class="form-group">
  <label for="exampleInputPassword1">Book Title</label>
  <input name="title" type="text" class="form-control" id="booktitle" placeholder="Title">
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Book Author</label>
  <input name="author" type="text" class="form-control" id="bookauthor" placeholder="Author">
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Book Cover</label>
  <input name="cover" type="text" class="form-control" id="bookcover" placeholder="Cover">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form></div>`;

export const createPage = (ctx) => {

    const createBookHandler = (event) => {
        let formdata = new FormData(event.target);
        let title = formdata.get('title');
        let author = formdata.get('author');
        let imgUrl = formdata.get('cover');
        createNewBook(title, author, imgUrl);
        page.redirect('/');
        alert('New book added!');

    }
    ctx.render(CreateBookTemplate(createBookHandler));
}