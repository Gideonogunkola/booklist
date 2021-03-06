//define variable
const form = document.getElementById("book-form");

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

//add book to List
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  //create a table row elemet
  const row = document.createElement("tr");

  // insert col into the row
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="" class = 'delete'>X</a></td>`;

  //append row to list
  list.appendChild(row);
};

//clear list
UI.prototype.clearList = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// show alert
UI.prototype.showAlert = function (message, className) {
  //create a div
  const div = document.createElement("div");
  //give a class
  div.className = ` alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  //get the parent
  const container = document.querySelector(".container");

  // insert div into the container before the form
  container.insertBefore(div, form);

  //disapper after three seconds
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 1000);
};

// Event Listerners
form.addEventListener("submit", function (e) {
  // get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //intantiate Book
  const book = new Book(title, author, isbn);

  //intantiate UI
  const ui = new UI();

  //validate Form
  if (title === "" || author === "" || isbn === "") {
    //show error alert
    ui.showAlert("Please input all fields", "error");
  } else {
    // Add Book to List
    ui.addBookToList(book);
    //show success alert
    ui.showAlert("Book added", "success")
    //clear fields
    ui.clearList();
  }

  e.preventDefault();
});
