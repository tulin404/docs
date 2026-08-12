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
]