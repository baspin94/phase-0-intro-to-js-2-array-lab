// Write your solution here!

// Test #1
const cats = ["Milo", "Otis", "Garfield"];

// Test #2

function destructivelyAppendCat(name) {
    cats.push(name);
}

// Test #3

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Test #4

function destructivelyRemoveLastCat() {
    cats.pop();
}

// Test #5

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Test #6

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

// Test #7

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

// Test #8

function removeLastCat() {
    const newCats = [...cats.slice(0, -1)];
    return newCats;
}

// Test #9

function removeFirstCat() {
    const newCats = [...cats.slice(1)];
    return newCats;
}