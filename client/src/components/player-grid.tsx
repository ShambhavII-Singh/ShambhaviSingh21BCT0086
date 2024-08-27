// import { PlayerTile } from "./tile"

// export const PlayerGrid = () => {
//     return (
//         <div className="grid grid-cols-5 gap-2 h-full">
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//             <div className="w-20 h-20 flex justify-center items-center"><PlayerTile /></div>
//         </div>
//     )
// }

import { PlayerTile } from './tile';

export const PlayerGrid = ({ gameState, websocket }) => {
    const handleClick = (row, col) => {
        
        const moveCommand = prompt("Enter move command (e.g., FR, BL)");
        if (moveCommand) {
            const message = JSON.stringify({
                type: 'move',
                player: gameState.currentPlayer,
                character: `P:${moveCommand}`, // Example for Pawn
                move: moveCommand
            });
            websocket.send(message);
        }
    };

    return (
        <div className="grid grid-cols-5 gap-2 h-full">
            {gameState.grid.map((row, rowIndex : number) =>
                row.map((cell : number, colIndex : number) => (
                    <PlayerTile
                        key={`${rowIndex}-${colIndex}`}
                        onClick={() => handleClick(rowIndex, colIndex)}>
                        {cell}
                    </PlayerTile>
                ))
            )}
        </div>
    );
};

export default PlayerGrid;