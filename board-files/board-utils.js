export const redMovesFrom = [
    [4, 5], [5, 6], [6, 7], [7],
    [8], [8, 9], [9, 10], [10, 11],
    [12, 13], [13, 14], [14, 15], [15],
    [16], [16, 17], [17, 18], [18, 19],
    [20, 21], [21, 22], [22, 23], [23],
    [24], [24, 25], [25, 26], [26, 27],
    [28, 29], [29, 30], [30, 31], [31],
    [], [], [], [],
];

export const redAttacksFrom = [
    [9], [8, 10], [9, 11], [10],
    [13], [12, 14], [13, 15], [14],
    [17], [16, 18], [17, 19], [18],
    [21], [20, 22], [21, 23], [22],
    [25], [24, 26], [25, 27], [26],
    [29], [28, 30], [29, 31], [30],
    [], [], [], [],
    [], [], [], [],
];

export const blackMovesFrom = [
    [], [], [], [],
    [0], [0, 1], [1, 2], [2, 3],
    [4, 5], [5, 6], [6, 7], [7],
    [8], [8, 9], [9, 10], [10, 11],
    [12, 13], [13, 14], [14, 15], [15],
    [16], [16, 17], [17, 18], [18, 19],
    [20, 21], [21, 22], [22, 23], [23],
    [24], [24, 25], [25, 26], [26, 27]
];

export const blackAttacksFrom = [
    [], [], [], [],
    [], [], [], [],
    [1], [0, 2], [1, 3], [2],
    [5], [4, 6], [5, 7], [6],
    [9], [8, 10], [9, 11], [10],
    [13], [12, 14], [13, 15], [14],
    [17], [16, 18], [17, 19], [18],
    [21], [20, 22], [21, 23], [22]
];

export function isItemInArray(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (Number(item) === array[i]) {
            return true;
        }
        
    }
    
    return false;
}

export function movePiece(squareFrom, squareTo, boardState) {
    const modifiedBoardState = boardState.slice();
    modifiedBoardState[squareTo] = modifiedBoardState[squareFrom];

    removePiece(squareFrom, modifiedBoardState);

    return modifiedBoardState;
}

export function removePiece(square, oldBoardState) {
    oldBoardState[square] = null;
}
