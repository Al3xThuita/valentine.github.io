document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('valentineForm');
    const card = document.getElementById('valentineCard');
    const senderName = document.getElementById('senderName');
    const valentineMessage = document.getElementById('valentineMessage');
    const resetButton = document.getElementById('resetButton');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        senderName.textContent = name;
        valentineMessage.textContent = message;

        form.classList.add('hidden');
        card.classList.remove('hidden');
    });

    resetButton.addEventListener('click', function () {
        form.reset();
        form.classList.remove('hidden');
        card.classList.add('hidden');
    });
});