// This file allows users to test and validate regular expressions against sample text.

document.addEventListener('DOMContentLoaded', function() {
    const regexInput = document.getElementById('regex-input');
    const testStringInput = document.getElementById('test-string-input');
    const resultOutput = document.getElementById('result-output');
    const testButton = document.getElementById('test-button');

    testButton.addEventListener('click', function() {
        const regexPattern = regexInput.value;
        const testString = testStringInput.value;

        try {
            const regex = new RegExp(regexPattern);
            const matches = testString.match(regex);
            if (matches) {
                resultOutput.textContent = `Matches found: ${matches.join(', ')}`;
                resultOutput.style.color = 'green';
            } else {
                resultOutput.textContent = 'No matches found.';
                resultOutput.style.color = 'red';
            }
        } catch (e) {
            resultOutput.textContent = 'Invalid regular expression.';
            resultOutput.style.color = 'red';
        }
    });
});