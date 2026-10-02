import { Locale } from "./types/props";

// NOTE: These constants exist to control which repos have or not a documentation.
// It is cross-referenced with the data from the API as a complement, mainly because of the translated titles, that, in some cases, may differ from the repos name.

// Types are added individually for identification (mainy used for icons in the main page)
export const LOCALES: Locale[] = ["pt", "en", "es"] as const;

export const PROJECTS = (locale: Locale) => [
    {
        id: 1245816633,
        type: "project",
        name: "FuelStock",
        desc:
            locale === "pt"
                ?
                "SaaS para gestão de estoque e análise de vendas para lojas de conveniência de postos de combustível."
                :
            locale === "en"
                ?
                "SaaS for inventory management and sales analysis for gas station convenience stores."
                :
                "SaaS para la gestión de inventario y el análisis de ventas para tiendas de conveniencia en estaciones de servicio."
    },
    {
        id: 1313823187,
        type: "project",
        name: "Docs",
        desc:
            locale === "pt"
                ?
                "Sistema de documentação técnica para organizar e apresentar projetos, APIs, módulos e experimentos."
                :
            locale === "en"
                ?
                "Technical documentation system for organizing and presenting projects, APIs, modules, and experiments."
                :
                "Sistema de documentación técnica para organizar y presentar proyectos, API, módulos y experimentos."
    },
    {
        id: 1135672317,
        type: "project",
        name: "Stormio",
        desc:
            locale === "pt"
                ?
                "Aplicação web de clima rápida e responsiva, com previsão mundial, localização automática, tradução e cache integrado."
                :
            locale === "en"
                ?
                "Fast and responsive web weather application featuring worldwide forecasts, automatic location detection, translation, and integrated caching."
                :
                "Aplicación web de clima rápida y adaptable, con pronóstico mundial, localización automática, traducción y caché integrado."
    }
];

export const APIS = (locale: Locale) => [
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
