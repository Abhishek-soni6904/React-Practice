import React, { memo, useState } from 'react';
import './ticTacToe.css'

const Box = memo(({ value, onClick }) => {
    return <div className="box" onClick={onClick}>{value}</div>
})
export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState('X')
    const [winner, setWinner] = useState(null)
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    const checkWinner = (newBoard) => {
        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c])
                return newBoard[a]
        }
        return newBoard.includes(null) ? null : 'Draw'
    }
    const handleClick = (index) => {
        if (board[index] || winner) return
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        const gameResult = checkWinner(newBoard)
        setWinner(gameResult)
        setTurn(turn==='X'?'O':'X')
    }
    const resetGame = ()=>{
        setBoard(Array(9).fill(null))
        setTurn('X')
        setWinner(null)
    }
    return (
        <div id="ticTacToe">
            <div className="container">
                <div className="gameBoard">
                    {board.map((value, i) => (
                        <Box key={i} value={value} onClick={() => handleClick(i)} />
                    ))}
                </div>
                <div className="content">
                    <h2>Tic Tac Toe</h2>
                    <span id="turnAndWinIndicator">
                    {winner ? (winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`) : `Turn for ${turn}`}
                </span>
                    <button id="resetButton" onClick={resetGame}>Reset</button>
                </div>
            </div>
        </div>
    );
}
