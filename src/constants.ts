import { Locale } from "./types/props";

export const LOCALES: Locale[] = ["pt", "en", "es"] as const;

export const PROJECTS = [
    {
        id: 1245816633,
        name: "FuelStock",
    },
    {
        id: 1313823187,
        name: "Docs",
    }
];

export const APIS = [
    {
        id: 1135672317,
        name: "Stormio",
    },
    {
        id: 1185588340,
        name: "UniFlow",
    }
];

export const MODULES = (locale: Locale) => [
    {
        // TEST
        id: 0,
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
