import { APIS, EXPERIMENTS, MODULES, PROJECTS } from "@/constants";
import { Repo } from "@/types/api";
import { DocType } from "@/types/docs";
import { Locale } from "@/types/props";

// GETS THE RAW GITHUB API DATA
export async function getRepos():
    Promise<Repo[] | null>
{
    const username = "tulin404";
    const token = process.env.GITHUB_PAT;

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${token}`,
            },
            next: { revalidate: 60 }
        });

        if (!response.ok) {
            console.log("[GITHUB API RESPONSE ERROR]: ", response.status);
            return null;
        };

        return response.json();
    } catch(error) {
        console.log("[GITHUB API FETCH ERROR]: ", error);
        return null;
    };
};

// FILTERS THE GH API RESPONSE AND GETS ONLY
export async function getUpdated(locale: Locale):
    Promise<Repo[] | null>
{
    // ANOTHER CALL SINCE THE RES IS ALREADY CACHED ("revalidate" property)
    const repos = await getRepos();
    if (!repos) {
        return null;
    };

    const spread = [...PROJECTS, ...APIS, ...MODULES(locale), ...EXPERIMENTS(locale)];
    const mapped = new Map(spread.map(item => [item.id, item]));

    return repos.flatMap(repo => {
        const item = mapped.get(repo.id)
        if (!item) {
            return [];
        };

        return {
            id: repo.id,
            type: item.type as DocType,
            repo_name: repo.name,
            name: item.name,
            html_url: repo.html_url,
            homepage: repo.homepage,
            updated_at: repo.updated_at
        };
    });
};
