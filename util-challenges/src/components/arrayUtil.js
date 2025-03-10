export const intersectArrays = (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item));
}

export const removeDuplicates = (arr) => {
    return Array.from(new Set(arr));
}