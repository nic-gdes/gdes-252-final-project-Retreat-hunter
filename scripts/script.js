document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('#nav ul');

    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });
});

function convertFahrenheitToCelsius() {
    const inputValue = document.getElementById('input-value').value;
    const celsiusResult = (inputValue - 32) * (5 / 9);
    document.getElementById('fahrenheit-result').textContent = `Result: ${celsiusResult.toFixed(2)} °C`;
}

function convertFeetToMiles() {
    const inputValue = document.getElementById('input-value').value;
    const milesResult = inputValue / 5280;
    document.getElementById('feet-result').textContent = `Result: ${milesResult.toFixed(6)} miles`;
}

function convertInchesToCentimeters() {
    const inputValue = document.getElementById('input-value').value;
    const centimetersResult = inputValue * 2.54;
    document.getElementById('inches-result').textContent = `Result: ${centimetersResult.toFixed(2)} cm`;
}

function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close modal if clicked outside of the content
window.onclick = function (event) {
    if (event.target === document.getElementById('myModal')) {
        closeModal();
    }
}

// Check the user's theme preference from local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Toggle between light and dark modes
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update the data-theme attribute and save to local storage
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}
