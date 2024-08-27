import { Button } from "./ui/button";
import { MouseEventHandler, useState } from "react";

export const PlayerTile = (clickAction: MouseEventHandler<HTMLButtonElement>,key : number) => {
    return (
        <Button key={key} onClick={clickAction} className='flex h-full w-full border-4 border-accent'/>
    )
}