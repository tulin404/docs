import { Locale } from "./types/props";

// NOTE: These constants exist to control which repos have or not a documentation.
// It is cross-referenced with the data from the API as a complement, mainly because of the translated titles, that, in some cases, may differ from the repos name.

// Types are added individually for identification (mainy used for icons in the main page)
export const LOCALES: Locale[] = ["pt", "en", "es"] as const;

export const PROJECTS = (locale: Locale) => [
    {
        id: 1245816633,
        type: "project",
        name: "FuelStock"
    },
    {
        id: 1313823187,
        type: "project",
        name: "Docs"
    }
];

export const APIS = (locale: Locale) => [
    {
        id: 1135672317,
        type: "api",
        name: "Stormio"
    },
    {
        id: 1185588340,
        type: "api",
        name: "UniFlow"
    }
];

export const MODULES = (locale: Locale) => [
    {
        // TEST
        id: 0,
        type: "module",
        name:
            locale === "pt"
                ?
                "Auth (Sessões + JWT)"
                :
            locale === "en"
                ?
                "Auth (Sessions + JWT)"
                :
                "Auth (Sesiones + JWT)"
    }
];

export const EXPERIMENTS = (locale: Locale) => [
    {
        id: 1386365670,
        type: "experiment",
        name:
            locale === "pt"
                ?
                "Detector de Isograma em GO"
                :
            locale === "en"
                ?
                "Isogram detector in GO"
                :
                "Detector de isogramas en Go"
    }
];

export const DOCTYPES = ["project", "api", "module", "experiment"] as const;
