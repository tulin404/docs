import { DocType } from "./docs";

export type Repo = {
    id: number,
    type: DocType,
    repo_name: string,
    name: string,
    html_url: string,
    homepage: string | null,
    updated_at: string
};
