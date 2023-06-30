import React from 'react'

import { Box } from './components/Box';

export const Board = ({ board, onclick }) => {
    return (
        <div>
            {board.map((value, idx) => {
                return <Box value={value} onclick={() => onclick(idx)} />
            })}
        </div>
    )
}
