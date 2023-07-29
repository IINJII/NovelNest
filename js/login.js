let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', async (e) => {
    let email = document.getElementById('floatingInput').value;
    let password = document.getElementById('floatingPassword').value;

    let a = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    a = await a.json();
    localStorage.setItem('token', a.token);

    console.log(a.token);

    location.href = '../templates/home.html'
})