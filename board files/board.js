import {  } from './board-utils.js';

const allClickableSquares = document.querySelectorAll('.clickable');
let boardState = [
    { id: 0, color: 'red', isKing: false }, { id: 1, color: 'red', isKing: false }, { id: 2, color: 'red', isKing: false }, { id: 3, color: 'red', isKing: false }, 
    { id: 4, color: 'red', isKing: false }, { id: 5, color: 'red', isKing: false }, { id: 6, color: 'red', isKing: false }, { id: 7, color: 'red', isKing: false },
    { id: 8, color: 'red', isKing: false }, { id: 9, color: 'red', isKing: false }, { id: 10, color: 'red', isKing: false }, { id: 11, color: 'red', isKing: false }, 
    null, null, null, null,
    null, null, null, null, 
    { id: 12, color: 'black', isKing: false }, { id: 13, color: 'black', isKing: false }, { id: 14, color: 'black', isKing: false }, { id: 15, color: 'black', isKing: false },
    { id: 16, color: 'black', isKing: false }, { id: 17, color: 'black', isKing: false }, { id: 18, color: 'black', isKing: false }, { id: 19, color: 'black', isKing: false }, 
    { id: 20, color: 'black', isKing: false }, { id: 21, color: 'black', isKing: false }, { id: 22, color: 'black', isKing: false }, { id: 23, color: 'black', isKing: false }
];

let squareSelected = [];
let turn = 'black';

function renderBoard() {
    for (let i = 0; i < boardState.length; i++) {
        const currentPiece = boardState[i];
        const currentSquare = allClickableSquares[i];

        currentSquare.classList.remove('king', 'red-piece', 'black-piece');
        if (currentPiece) {
            if (currentPiece.color === 'red') {
                currentSquare.classList.add('red-piece');
            }
            if (currentPiece.color === 'black') {
                currentSquare.classList.add('black-piece');
            }
            if (currentPiece.isKing) {
                currentSquare.classList.add('king');
            }
        } 
    }
}

function movePiece(squareFrom, squareTo) {
    boardState[squareTo] = boardState[squareFrom];

    removePiece(squareFrom);
}

function removePiece(square) {
    boardState[square] = null;
}

function setEventListeners() {
    for (let i = 0; i < allClickableSquares.length; i++) {
        const currentClickableSquare = allClickableSquares[i];
        currentClickableSquare.addEventListener('click', () => {
            checkMove(currentClickableSquare);
        });
    }
}

function checkMove(lastClick) {
    if (secondMoveOk(lastClick)) {
        squareSelected.push(lastClick.id);
        movePiece(squareSelected[0], squareSelected[1]);
        renderBoard();
        squareSelected = [];

        //check for attack


    }


        
    if (firstMoveOk(lastClick)) {
        console.log(boardState[lastClick.id].id)
        squareSelected.push(lastClick.id)
    }
    console.log(boardState)
}

function firstMoveOk(lastClick) {
    if (boardState[lastClick.id] && boardState[lastClick.id].color === turn) {
        return true;
    }
    return false;
}

function secondMoveOk(lastClick) {
    //check if in range, check if attack ok, check for other illegal moves
    if (squareSelected.length === 1) {
        return true;
    }
    return false;
}

renderBoard();
setEventListeners();
