const textStats = (text) => {
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    const characterCount = text.length;
    const byteSize = new Blob([text]).size;

    return {
        wordCount: wordCount,
        characterCount: characterCount,
        byteSize: byteSize,
    };
};

const displayTextStats = (text) => {
    const stats = textStats(text);
    const resultContainer = document.getElementById('text-stats-result');

    resultContainer.innerHTML = `
        <p>Word Count: ${stats.wordCount}</p>
        <p>Character Count: ${stats.characterCount}</p>
        <p>Byte Size: ${stats.byteSize} bytes</p>
    `;
};

document.getElementById('text-stats-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const textInput = document.getElementById('text-input').value;
    displayTextStats(textInput);
});