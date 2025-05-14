function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characterPool = lowercaseChars;
    
    if (includeUppercase) {
        characterPool += uppercaseChars;
    }
    if (includeNumbers) {
        characterPool += numberChars;
    }
    if (includeSymbols) {
        characterPool += symbolChars;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }
    
    return password;
}

// Example usage:
// const password = generatePassword(12, true, true, true);
// console.log(password);