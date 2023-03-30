
// Your Code Here


async function retrieveBooks() {
    let retrieve = await fetch('http://localhost:3001/listBooks');
    let books = await retrieve.json();
    console.log(books);
    books.forEach(adminBooks);
   
}
// function to retreive all the books in the list 

function adminBooks(book) {
    let adminContainer = document.getElementById('adminContainer');
    adminContainer.innerHTML += `
        <ul>
           <li>${book.title} </li> 
           </ul>
        `
// The container to place the title above the text box
    const myTextbox = document.createElement('input');
myTextbox.setAttribute('type', 'text');
myTextbox.setAttribute('id', 'myTextbox');
myTextbox.setAttribute('placeholder','Enter your text here');

// textbox to place the value to update the quanity

const myButton = document.createElement('button');
myButton.setAttribute('id', 'myButton');
myButton.textContent = "Save";

const myList = document.createElement('ul');
 myList.setAttribute('id', 'myList');
  
  //submit or save button to render the new value

let myValue = 0;

myTextbox.addEventListener('input', () => {
  
  myValue = parseFloat(myTextbox.value);
});

myButton.addEventListener('click', () => {
  
  console.log(`Value before update: ${book.quantity}`);
  myValue = parseFloat(myTextbox.value);
  console.log(`Value after update: ${myTextbox.value}`);
});
// to update the value to what is saved through the textbox

adminContainer.appendChild(myTextbox);
adminContainer.appendChild(myButton);
adminContainer.appendChild(myList);



}

//adminBooks()
retrieveBooks()

   