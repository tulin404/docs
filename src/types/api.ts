import { DocType } from "./docs";

// 'type' is being typed as DocType here even thought it is singular (project) and not plural (projects)
export type Repo = {
    id: number,
    type: DocType,
    repo_name: string,
    name: string,
    desc: string,
    html_url: string,
    homepage: string,
    updated_at: string
};
