
// Your Code Here



async function retrieveBook() {
let retrieve = await fetch('http://localhost:3001/listBooks',{
})
let books = await retrieve.json();
console.log(books)



 books.forEach(adminBooks)

}

 
 function adminBooks(book) {
    let adminContainer = document.getElementById('admin')
    adminContainer.innerHTML += `
       <div>
        <ul>
           <li>${book.title} </li> 
           </ul>
        </div>
    `
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
 
