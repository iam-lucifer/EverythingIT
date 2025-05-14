// This file handles encoding and decoding of Base64 strings.

function encodeBase64(input) {
    return btoa(input);
}

function decodeBase64(input) {
    try {
        return atob(input);
    } catch (e) {
        console.error("Invalid Base64 string");
        return null;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const encodeButton = document.getElementById("encodeButton");
    const decodeButton = document.getElementById("decodeButton");
    const inputField = document.getElementById("base64Input");
    const outputField = document.getElementById("base64Output");

    encodeButton.addEventListener("click", function() {
        const input = inputField.value;
        const encoded = encodeBase64(input);
        outputField.value = encoded;
    });

    decodeButton.addEventListener("click", function() {
        const input = inputField.value;
        const decoded = decodeBase64(input);
        outputField.value = decoded !== null ? decoded : "Error decoding Base64";
    });
});