// QR Code Generator Tool
// This script generates a QR code from a given text or URL using the QRCode.js library.

document.addEventListener('DOMContentLoaded', function() {
    const qrCodeForm = document.getElementById('qr-code-form');
    const qrCodeInput = document.getElementById('qr-code-input');
    const qrCodeOutput = document.getElementById('qr-code-output');

    qrCodeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputValue = qrCodeInput.value.trim();

        if (inputValue) {
            generateQRCode(inputValue);
        } else {
            alert('Please enter a valid text or URL.');
        }
    });

    function generateQRCode(text) {
        // Clear previous QR code
        qrCodeOutput.innerHTML = '';

        // Generate QR code
        const qrCode = new QRCode(qrCodeOutput, {
            text: text,
            width: 128,
            height: 128,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});