// Utility functions for the developer toolkit

// Function to generate a random string of specified length and character set
function generateRandomString(length, charset) {
    let result = '';
    const characters = charset || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Function to validate JSON
function isValidJSON(jsonString) {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
}

// Function to prettify JSON
function prettifyJSON(jsonString) {
    if (isValidJSON(jsonString)) {
        return JSON.stringify(JSON.parse(jsonString), null, 4);
    }
    return 'Invalid JSON';
}

// Function to convert a date to a specified format
function formatDate(date, format) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

// Function to escape HTML entities
function escapeHTML(html) {
    const div = document.createElement('div');
    div.innerText = html;
    return div.innerHTML;
}

// Function to generate a UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Function to calculate the strength of a password
function passwordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
}

// Function to convert a string to Base64
function toBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

// Function to decode a Base64 string
function fromBase64(str) {
    return decodeURIComponent(escape(atob(str)));
}