export const reverseString = (str) => {
    const arr = str.split('');
    return arr.reverse().join('');
}

export const capitalizeWords = (str) => {
    const arr = str.toLowerCase().split(" ");
    const result = [];
    for (const element of arr) {
        result.push(element.charAt(0).toUpperCase() + element.slice(1));
    }
    return result.join(" ");
}

export const isPalindrome = (str) => {
    return str === reverseString(str);
}