document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('#nav ul');

    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });
});



function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById('input-value').value;
    const celsiusResult = (fahrenheitInput - 32) * (5 / 9);
    document.getElementById('fahrenheit-result').textContent = `Result: ${celsiusResult.toFixed(2)} °C`;
}

function convertFeetToMiles() {
    const feetInput = document.getElementById('input-value').value;
    const milesResult = feetInput / 5280;
    document.getElementById('feet-result').textContent = `Result: ${milesResult.toFixed(6)} miles`;
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

// Function to open the modal
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

