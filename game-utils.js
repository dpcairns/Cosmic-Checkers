const MAGICKEY = 'CHECKERSDATA';

export function saveToLocalStorage(dataToSave) {
    const stringyData = JSON.stringify(dataToSave);
    localStorage.setItem(MAGICKEY, stringyData);
}

export function loadFromLocalStorage() {
    const stringyData = localStorage.getItem(MAGICKEY);
    const data = JSON.parse(stringyData);
    return data;
}

export const randomizer = () => Math.floor(Math.random() * 2) === 0 
    ? ['black', 'red'] 
    : ['red', 'black'];
