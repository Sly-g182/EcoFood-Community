document.addEventListener('DOMContentLoaded', () => {
    // Registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;

            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            localStorage.setItem('userName', nombre);

            alert('¡Registro exitoso!');
            registerForm.reset();
            window.location.href = 'Login.html';
        });
    }

    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            if (email === storedEmail && password === storedPassword) {
                const nombre = localStorage.getItem('userName') || 'Usuario';
                alert(`¡Bienvenido/a ${nombre}!`);
                localStorage.clear();
                window.location.href = 'home.html';
            } else {
                alert('Correo o contraseña incorrectos.');
            }
        });
    }
});
