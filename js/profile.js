let name = document.getElementById('name');
let email = document.getElementById('email');
let contact = document.getElementById('contact');
let items = document.getElementById('items');
let submit = document.getElementById('submit');
let format = document.getElementById('format');
let rating = document.getElementById('rating');
let availability = document.getElementById('availability');
let author = document.getElementById('author');
let book_name = document.getElementById('book_name');
let logout = document.getElementById('logout')

name.innerText = localStorage.getItem('details').split(',')[0]
email.innerText = localStorage.getItem('details').split(',')[1]
contact.innerText = localStorage.getItem('details').split(',')[2]




submit.addEventListener('click', async () => {
    let a = await fetch('http://localhost:3000/api/book/addBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: localStorage.getItem('details').split(',')[0], email: localStorage.getItem('details').split(',')[1], contact: localStorage.getItem('details').split(',')[2], book_name: book_name.value, author: author.value, format: format.value, availability: availability.value, rating: rating.value})
    })

    a = await a.json();
    console.log(a);
})





let func = async () => {
    let a = await fetch('http://localhost:3000/api/book/fetchAllBooks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: localStorage.getItem('details').split(',')[0]})
    })
    a = await a.json()

    console.log(a.book.book[0]);

    for(let i = 0; i < a.book.book.length; i++)
    {
        items.innerHTML = items.innerHTML + `<li class="d-flex"><a class="dropdown-item">${a.book.book[i]}</a><span><i id="it" class="fa-solid fa-trash" style="color: #ff0000; padding-right: 5px"></i></span></li>`
    }
}

func()




logout.addEventListener('click', () => {
    location.href = '../index.html'
    localStorage.removeItem('token');
    localStorage.removeItem('details')

})



let li = document.getElementsByTagName('li');

for(let i = 0; i < li.length; i++)
{
    li[i].addEventListener('click', (e) => {
        console.log('Hey')
    })
}