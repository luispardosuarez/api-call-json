import { UserApp } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = new UserApp();

    const getUserBtn = document.getElementById('getUserBtn');
    getUserBtn.addEventListener('click', () => {
        const userIdInput = document.getElementById('userIdInput');
        const userId = parseInt(userIdInput.value);

        if (isNaN(userId)) {
            window.alert('Por favor, ingrese un ID de usuario válido.');
            return;
        }

        app.fetchUserById(userId);
    });
});
