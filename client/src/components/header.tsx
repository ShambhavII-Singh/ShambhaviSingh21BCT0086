import { RepositoryLinkButton } from "./buttons/repository-link-button";
import { LightModeDarkModeToggle } from "./buttons/lightmode-darkmode-button";
import { DetailsButton } from "./buttons/details-button";
import { TooltipCreator } from "./tooltip-creator";
import { LinkedinLinkButton } from "./buttons/linkedin-link-button";

export const Header = () => {
    return (
        <div className="h-fit w-full flex justify-between py-2 px-3">
            <div className="flex w-full justify-end gap-2">
                <DetailsButton />
                <TooltipCreator trigger={<RepositoryLinkButton />} description="Check out the GitHub repo!" />
                <TooltipCreator trigger={<LinkedinLinkButton />} description="Check out my LinkedIn!" />
                <LightModeDarkModeToggle />
            </div>
        </div>
    )
}