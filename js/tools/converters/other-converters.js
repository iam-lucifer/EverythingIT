// This file contains additional conversion tools that may not fit into the other categories.

function convertTemperature(value, fromUnit, toUnit) {
    let result;
    if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        result = (value * 9/5) + 32;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        result = (value - 32) * 5/9;
    } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
        result = value + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
        result = value - 273.15;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        result = (value - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        result = (value - 273.15) * 9/5 + 32;
    } else {
        result = value; // If units are the same
    }
    return result;
}

function convertCurrency(amount, fromCurrency, toCurrency, exchangeRate) {
    return amount * exchangeRate;
}

function convertLength(value, fromUnit, toUnit) {
    const conversionRates = {
        'meters': 1,
        'kilometers': 0.001,
        'miles': 0.000621371,
        'feet': 3.28084,
        'inches': 39.3701
    };
    return value * conversionRates[fromUnit] / conversionRates[toUnit];
}

function convertWeight(value, fromUnit, toUnit) {
    const conversionRates = {
        'grams': 1,
        'kilograms': 0.001,
        'pounds': 0.00220462,
        'ounces': 0.035274
    };
    return value * conversionRates[fromUnit] / conversionRates[toUnit];
}

// Export functions for use in other modules
export { convertTemperature, convertCurrency, convertLength, convertWeight };