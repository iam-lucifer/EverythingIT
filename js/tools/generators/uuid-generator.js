// UUID Generator
function generateUUID() {
    // Generate a random UUID (version 4)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Function to display the generated UUID
function displayUUID() {
    const uuid = generateUUID();
    const outputElement = document.getElementById('uuid-output');
    outputElement.textContent = uuid;
}

// Event listener for the button to generate UUID
document.getElementById('generate-uuid-button').addEventListener('click', displayUUID);