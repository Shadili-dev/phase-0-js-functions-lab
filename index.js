// Budget Management Functions

// 1. calculateTax - Calculate 10% tax on an amount
function calculateTax(amount) {
    const taxRate = 0.10; // 10%
    return amount * taxRate;
}

// 2. convertToUpperCase - Convert string to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// 3. findMaximum - Find the larger of two numbers
function findMaximum(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// 4. isPalindrome - Check if a word reads the same forwards and backwards
function isPalindrome(word) {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the string
    const reversed = cleaned.split('').reverse().join('');
    // Compare
    return cleaned === reversed;
}

// 5. calculateDiscountedPrice - Calculate price after discount
function calculateDiscountedPrice(price, discountPercentage) {
    const discountAmount = price * (discountPercentage / 100);
    return price - discountAmount;
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateTax,
        convertToUpperCase,
        findMaximum,
        isPalindrome,
        calculateDiscountedPrice
    };
}

// Optional: Test the functions
console.log('=== Testing Budget Functions ===');
console.log('1. calculateTax(100):', calculateTax(100));
console.log('2. convertToUpperCase("budget"):', convertToUpperCase('budget'));
console.log('3. findMaximum(15, 25):', findMaximum(15, 25));
console.log('4. isPalindrome("racecar"):', isPalindrome('racecar'));
console.log('5. isPalindrome("budget"):', isPalindrome('budget'));
console.log('6. calculateDiscountedPrice(200, 15):', calculateDiscountedPrice(200, 15));
