// Get a reference to the button
const themeToggleBtn = document.getElementById('theme-toggle');

// Function to toggle the color theme
function toggleColorTheme() {
    const root = document.documentElement; // Get the :root element
    if (root.classList.contains('dark-theme')) {
        // Switch to Light Mode
        root.classList.remove('dark-theme');
        themeToggleBtn.textContent = "Modo Escuro";
    } else {
        // Switch to Dark Mode
        root.classList.add('dark-theme');
        themeToggleBtn.textContent = "Modo Claro";
    }
}

// Event listener for the theme toggle button
themeToggleBtn.addEventListener('click', toggleColorTheme);