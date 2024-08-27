import { CalendarDays } from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../ui/avatar"
import { Button } from "../ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card"

export const DetailsButton = () => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
            <Button variant="link">Details</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
                <Avatar>
                <AvatarImage src="https://github.com/ShambhavII-Singh.png" />
                <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                <h4 className="text-sm font-semibold">A chess-like web based game</h4>
                <p className="text-sm">
                    by <b>Shambhavi Singh 21BCT0086 VIT Vellore</b>
                </p>
                <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                    Created 26 August 2024
                    </span>
                </div>
                </div>
            </div>
            </HoverCardContent>
        </HoverCard>
    )
}


