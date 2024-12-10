const paletteContainer = document.querySelector('.palette');
const generateBtn = document.getElementById('generate-btn');

// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate and display the color palette
function generatePalette() {
    paletteContainer.innerHTML = ''; // Clear previous palette
    for (let i = 0; i < 5; i++) { // Generate 5 colors
        const color = getRandomColor();
        const colorBlock = document.createElement('div');
        colorBlock.className = 'color-block';
        colorBlock.style.backgroundColor = color;
        colorBlock.textContent = color;

        // Copy color code to clipboard on click
        colorBlock.addEventListener('click', () => {
            navigator.clipboard.writeText(color).then(() => {
                alert(`Copied ${color} to clipboard!`);
            });
        });

        paletteContainer.appendChild(colorBlock);
    }
}

// Generate a palette on page load and when the button is clicked
generatePalette();
generateBtn.addEventListener('click', generatePalette);
