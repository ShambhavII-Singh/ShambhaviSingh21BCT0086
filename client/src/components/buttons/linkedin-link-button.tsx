import { LinkedinIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export const LinkedinLinkButton = () => {

    return (
        <Button type="submit" variant="outline" size="icon" onClick={() => {window.location.href = 'https://www.linkedin.com/in/shambhavi-singh-';}}>
            <LinkedinIcon />
        </Button>
    )
}