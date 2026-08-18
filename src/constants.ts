import { Locale } from "./types/props";

export const PROJECTS = [
    {
        name: "FuelStock",
        repository: ""
    },
    {
        name: "Docs",
        repository: ""
    }
];

export const APIS = [
    {
        name: "Stormio",
        repository: ""
    },
    {
        name: "UniFlow"
    }
];

export const MODULES = (locale: Locale) => [
    {
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
        ,
        repository: ""
    }
];

export const EXPERIMENTS = (locale: Locale) => [
    {
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
        ,
        repository: ""
    }
];

export const DOCTYPES = ["project", "api", "module", "experiment"] as const;