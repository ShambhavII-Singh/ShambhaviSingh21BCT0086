import { FolderGit2 } from "lucide-react";
import { Button } from "../../components/ui/button";

export const RepositoryLinkButton = () => {

    return (
        <Button type="submit" variant="outline" size="icon" onClick={() => {window.location.href = 'https://github.com/ShambhavII-Singh/ShambhaviSingh21BCT0086';}}>
            <FolderGit2 />
        </Button>
    )
}