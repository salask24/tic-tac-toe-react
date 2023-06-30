import React from 'react'

import { Box } from './components/Box';
import "./Board.css"

export const Board = ({ board, onclick }) => {
    return (
        <div className='board'>
            {board.map((value, idx) => {
                return <Box value={value} onclick={() => onclick(idx)} />
            })}
        </div>
    )
}
