document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful!');
        
        document.getElementById('menuLink').style.display = 'block';
        
        document.getElementById('loginForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (name && email && password) {
        alert('Registration successful!');
    } else {
        alert('Please fill in all fields.');
    }
});