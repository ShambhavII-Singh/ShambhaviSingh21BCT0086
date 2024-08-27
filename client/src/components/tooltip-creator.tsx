import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip"

type TooltipCreator = {
    trigger: React.ReactElement,
    description: string,
}

export const TooltipCreator = ({ trigger,description }: TooltipCreator) => {
    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span>{trigger}</span>
                </TooltipTrigger>
            <TooltipContent>
                <p>{description}</p>
            </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}