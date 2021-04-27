class Book {
  constructor(title, author, totalPages, readPages, rating) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.readPages = readPages;
    this.rating = rating;
  }
}

class BookPage {
  static displayBooks() {
    const books = [
      new Book('Random', 'Tom', 100, 0, 5),
      new Book('asdsd', 'jdsad', 120, 11, 4),
      new Book('dasd', 'dsadas', 50, 0, 3),
      new Book('dasd', 'ddd', 20, 10, 1),
    ];
    books.forEach((book) => BookPage.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.setAttribute('bookData', JSON.stringify(book));

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.totalPages - book.readPages}</td>
      <td>${book.rating}</td>
      <td>
        <a href="#" class="edit"><i class="fa fa-pencil"></i></a>
        <a href="#" class="delete"><i class="fa fa-trash"></i></a>        
      </td>
    `;

    list.appendChild(row);
  }

  static clearFields() {
    BookPage.setFields('', '', '', '', 5);
  }

  static editBook(el) {
    const { title, author, totalPages, readPages, rating } = JSON.parse(el.parentElement.parentElement.getAttribute('bookData'));
    BookPage.setFields(title, author, totalPages, readPages, rating);
  }

  static deleteBook(el) {
    el.parentElement.parentElement.remove();
  }

  static setFields(title, author, totalPages, readPages, rating) {
    document.querySelector('#title').value = title;
    document.querySelector('#author').value = author;
    document.querySelector('#totalPages').value = totalPages;
    document.querySelector('#readPages').value = readPages;
    document.querySelector('input[name="rating"]').value = rating;
  }

  static showAlert(message) {
    alert(message)
  }
}

document.addEventListener('DOMContentLoaded', BookPage.displayBooks);

//issaugo knygas lenteleje
function submitBook() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const totalPages = parseInt(document.querySelector('#totalPages').value);
  const readPages = parseInt(document.querySelector('#readPages').value);
  const rating = document.querySelector('input[name="rating"]:checked').value;

  if (title === '' || author === '' || totalPages === '' || readPages === '' || rating === '') {
    BookPage.showAlert('Please fill in all fields');
  } else {
    // sukuria book objekta   
    const book = new Book(title, author, totalPages, readPages, rating);

    BookPage.addBookToList(book);

    // isvalo formos laukus po submit'o
    BookPage.clearFields();
  }
}

window.addEventListener('load', function () {

  document.querySelector('#book-list').addEventListener('click', (e) => {
    const el = e.target.parentElement;

    if (el.classList.contains('delete')) {
      // istrina knygas
      BookPage.deleteBook(el);
    }

    if (el.classList.contains('edit')) {
      // redaguoja
      BookPage.editBook(el);
    }
  });

});