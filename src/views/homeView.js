import { html } from '../../node_modules/lit-html/lit-html.js';
import * as bookService from '../services/bookService.js';

const homeTemplate = (books) => html `<div style="display:block;margin:auto;padding:100px;">
<h1 style="text-align:center;padding:25px">Book Collection</h1>
<div class="card-group">
${books.map(book => bookTemplate(book))}
</div>
</div>
`;
const bookTemplate = (book) => {
    return html `
    <div class="card rounded" style="width: 18rem;padding:10px;margin:10px;background-color:lavender;">
      <img class="card-img-top" src=${book.img} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.author}</p>
      </div>
    `;
}
export const homePage = (ctx) => {
    let data = bookService.getAll();
    data.then(books => {
        ctx.render(homeTemplate(Object.values(books)));
    });

}