class myArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
    }

    pop(item) {
        delete this.data[this.length - 1];
        this.length--;
    }

    get(index) {
        return this.data[index];
    }

    shift() {
        const firstItem = this.data[0];
        for (let index = 0; index < this.length; index++) {
            this.data[index] = this.data[index + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    delete(index) {
        const item = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        // delete this.data[this.length - 1];
        // this.length--;

        return item;

    }
}

const newArray = new myArray();

newArray.push("apple0");
newArray.push("apple1");
newArray.push("apple2");
newArray.push("apple3");
newArray.push("apple4");
newArray.push("apple5");
newArray.push("apple6");
console.log('-----------');
// console.log(newArray.shift());
console.log(newArray.delete(6));

console.log(newArray);

const str = "hello";
console.log(str.split('').reverse().join(''));

function Palindromes(str) {
    const newStr = str.split('').reverse().join('');

    return newStr === str ? true : false;
}
function PalindromesNumber(number) {
    const str = String(number);
    return (+(str.split('').reverse().join('')));

}


console.log(Palindromes('hello'));
console.log(Palindromes('abba'));

console.log(PalindromesNumber(1214));

const StrToUpperCase = (str) => {
    const arr = str.split(" ");
    return arr[0].charAt(0).toUpperCase() + arr[0].slice(1) + " " + arr[1].toUpperCase();
}

console.log(StrToUpperCase("hello world"));

// Math.min();



//Array挑战

const chunk = (arr, num) => {
    const newArr = arr.flat();
    let index = 0;
    const chunked = [];
    while (index < newArr.length) {
        const chunk = newArr.slice(index, index + num);
        chunked.push(chunk);
        index += num;
    }

    return chunked;
}

console.log(chunk([[1, 2, 3, 4, 5, 6], 7, 8], 3));

