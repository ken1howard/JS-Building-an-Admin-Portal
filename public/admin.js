
// Your Code Here



async function retrieveBook() {
let retrieve = await fetch('http://localhost:3001/listBooks',{
})
let books = await retrieve.json();
console.log(books)



 books.forEach(adminBooks)

}

function adminBooks() {

const adminContainer = document.getElementById('adminContainer')

const myTextbox = document.createElement('input');
myTextbox.setAttribute('type', 'text');
myTextbox.setAttribute('id', 'myTextbox');

const myButton = document.createElement('button');
myButton.setAttribute('id', 'myButton');
myButton.textContent = "Save";

let myValue = 0;

myTextbox.addEventListener('input', () => {
  
  myValue = parseFloat(myTextbox.value);
});

myButton.addEventListener('click', () => {
  
  console.log(`Value before update: ${book.quantity}`);
  myValue = parseFloat(myTextbox.value);
  console.log(`Value after update: ${myTextbox.value}`);
});

adminContainer.appendChild(myTextbox)
adminContainer.appendChild(myButton)

}

retrieveBook()
adminBooks()

/*async function listBooks() {
    await fetch('http://localhost:3001/listBooks', {
       method: 'GET',
     headers: 'application/json',
      body: JSON.stringify ({
 'quantity': document.getElementsByid('books').value
         }),
     })
     
 };

 const sbutton = document.querySelector('saveButton');

 sbutton.addEventListener('click', listBooks); */
 
 
//retrieveBook

/*   const myButton = document.createElement('myButton');
    myButton.textContent = 'Save';

myButton.addEventListener ('click', () => {

});

const myTextbox = document.createElement('myTextbox');
myTextbox.setAttribute('placeholder','Enter your text here');
myTextbox.setAttribute('maxlength', '50');

myTextbox.addEventListener('input')*/