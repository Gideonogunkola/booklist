// // Define Var
const form = document.querySelector('#book-form'),
      container = document.querySelector('.container'),
      title = document.querySelector('#title'),
      author = document.querySelector('#author'),
      isbn = document.querySelector('#isbn'),
      list = document.querySelector('#book-list');


      //Book connstructor
      class Book{
          constructor(title, author, isbn){
            this.title = title;
            this.author = author;
            this.isbn = isbn;
          }
        
      }



    //   UI constructor
      class UI{
        addBookToList(book){
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
        }

        clearField(){

        }

        showAlert(message, className){
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

        }

        deleteBook(target){
            if (target.className === 'delete'){
                target.parentElement.parentElement.remove();
            }
        }

        clearField(){
            document.getElementById("title").value = "";
            document.getElementById("author").value = "";
            document.getElementById("isbn").value = "";
        }

      }


      // Event Listerners
    form.addEventListener("submit", function (e) {
    // get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    console.log(form)
  
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
      ui.clearField();
    }
  
    e.preventDefault();
  });

  //Event Listener for delete
  list.addEventListener("click", function(e){
    //intantiate UI
    const ui = new UI();

    //delete book
    ui.deleteBook(e.target);

     //show remove alert
     ui.showAlert("Book removed", "error");

     e.preventDefault();

  })
  
