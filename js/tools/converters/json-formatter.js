function formatJSON(jsonString) {
    try {
        const jsonObject = JSON.parse(jsonString);
        return JSON.stringify(jsonObject, null, 4); // Prettify with 4 spaces indentation
    } catch (error) {
        return 'Invalid JSON: ' + error.message;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('json-input');
    const outputArea = document.getElementById('json-output');
    const formatButton = document.getElementById('format-json');

    formatButton.addEventListener('click', () => {
        const jsonString = inputArea.value;
        const formattedJSON = formatJSON(jsonString);
        outputArea.value = formattedJSON;
    });
});