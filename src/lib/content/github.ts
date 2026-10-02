import { APIS, EXPERIMENTS, MODULES, PROJECTS } from "@/constants";
import { Repo } from "@/types/api";
import { DocType } from "@/types/docs";
import { Locale } from "@/types/props";
import { getCards } from "./cards";

export class GitHub {

    // FETCHES GITHUB API AND GETS ALL THE tulin404 REPOS
    static async getRepos():
        Promise<Repo[] | null>
    {
        const username = "tulin404";
        const token = process.env.GITHUB_PAT;

        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
                headers: {
                    "Accept": "application/vnd.github+json",
                    "Authorization": `Bearer ${token}`,
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

    // RETURNS THE INTERSECTION OF ALL THE TYPES WITH THE GH API DATA, SORTING BY UPDATE DATE
    static async getUpdated(locale: Locale):
        Promise<Repo[] | string>
    {
        // ANOTHER CALL SINCE THE RES IS ALREADY CACHED ("revalidate" property)
        const repos = await GitHub.getRepos();
        if (!repos) {
            switch(locale) {
                case "pt":
                    return "Os repositórios recentemente atualizados não estão disponíveis. Por favor, tente novamente mais tarde.";
                case "en":
                    return "Recently updated repositories are currently unavailable. Please, try again later.";
                case "es":
                    return "Los repositorios actualizados recientemente no están disponibles. Por favor, inténtelo de nuevo más tarde.";
            };
        };

        const spread = [...PROJECTS(locale), ...APIS(locale), ...MODULES(locale), ...EXPERIMENTS(locale)];
        const mapped = new Map(spread.map(item => [item.id, item]));

        return repos.flatMap(repo => {
            const item = mapped.get(repo.id)
            if (!item) {
                return [];
            };

            // RETURNING A LOT OF INFO JUST IN CASE BY NOW
            return {
                id: repo.id,
                type: item.type as DocType,
                repo_name: repo.name,
                name: item.name,
                html_url: repo.html_url,
                homepage: repo.homepage,
                updated_at: repo.updated_at,
            };
        });
    };

    static async getDocsByType(locale: Locale, type: DocType) {
        const repos = await GitHub.getRepos();
        if (!repos) {
            switch(locale) {
                case "pt":
                    return "Os repositórios não estão disponíveis. Por favor, tente novamente mais tarde.";
                case "en":
                    return "Repositories are currently unavailable. Please, try again later.";
                case "es":
                    return "Los repositorios no están disponibles. Por favor, inténtelo de nuevo más tarde.";
            };
        };

        const cards = getCards(type, locale);

        const mapped = new Map(cards.map(card => [card.id, card]));
        return repos.flatMap(repo => {
            const item = mapped.get(repo.id);
            if (!item) {
                return [];
            };

            // RETURNING A LOT OF INFO JUST IN CASE BY NOW
            return {
                id: repo.id,
                type: item.type as DocType,
                repo_name: repo.name,
                name: item.name,
                html_url: repo.html_url,
                homepage: repo.homepage,
                updated_at: repo.updated_at,
            };
        });
    };
};
