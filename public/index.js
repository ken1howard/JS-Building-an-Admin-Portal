async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    console.log(books)

    books.forEach(renderBook)
}

function renderBook(book) {
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
                ${book.imageURL ? `
                    <img class="card-img-top" src="${book.imageURL}" />
                `
                : ``}
                <div class="card-body">
                    <h5 class="mybttn">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Available: ${book.quantity}</h6>
                    <p class="card-text">${book.description}</p>
                </div>
            </div>
        </div>
    `
}
async function updateInventory() {
    const inventory = document.getElementById(`inventory-${book.id}`).value;
    console.log(`Updating inventory for book ${book.quantity} to ${myTextbox.value}`);

    let response = await fetch(`http://localhost:3001/listbooks/${book.quantity}`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
        'quantity': inventory
    })
    });
    console.log(response)
}
main()
renderBook()
updateInventory()