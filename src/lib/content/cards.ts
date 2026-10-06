import { StartCard, DocType } from "@/types/docs";
import { Locale } from "@/types/props";
import { getDocCounts } from "./getDocCounts";
import { APIS, EXPERIMENTS, MODULES, PROJECTS } from "@/constants";

// GETS THE CARDS (/[locale]) CONTENT
export function getStartCards(type: DocType, locale: Locale): StartCard {
    function getAllLangs() {
        const counts = getDocCounts();

        switch(type) {
            case "project":
                return {
                    pt: {
                        title: "Projetos",
                        desc: "Sistemas e aplicações completas que construí.",
                        count: counts.projects
                    },
                    en: {
                        title: "Projects",
                        desc: "Full applications and systems that I've built.",
                        count: counts.projects
                    },
                    es: {
                        title: "Proyectos",
                        desc: "Sistemas y aplicaciones completos que desarrollé.",
                        count: counts.projects
                    }
                };
            case "api":
                return {
                    pt: {
                        title: "APIs",
                        desc: "APIs REST e GraphQL que desenvolvi.",
                        count: counts.apis
                    },
                    en: {
                        title: "APIs",
                        desc: "REST and GraphQL APIs that I've developed.",
                        count: counts.apis
                    },
                    es: {
                        title: "APIs",
                        desc: "API REST y GraphQL que desarrollé.",
                        count: counts.apis
                    }
                };
            case "module":
                return {
                    pt: {
                        title: "Módulos",
                        desc: "Pacotes reutilizáveis e utilitários.",
                        count: counts.modules
                    },
                    en: {
                        title: "Modules",
                        desc: "Reusable packages and utilities.",
                        count: counts.modules
                    },
                    es: {
                        title: "Módulos",
                        desc: "Paquetes reutilizables y utilitarios.",
                        count: counts.modules
                    }
                };
            case "experiment":
                return {
                    pt: {
                        title: "Experimentos",
                        desc: "Pequenos experimentos e tópicos que estou explorando.",
                        count: counts.experiments
                    },
                    en: {
                        title: "Experiments",
                        desc: "Small experiments and topics that I'm exploring.",
                        count: counts.experiments
                    },
                    es: {
                        title: "Experimentos",
                        desc: "Pequeños experimentos y temas que estoy explorando.",
                        count: counts.experiments
                    }
                };
        };
    };

    return getAllLangs()[locale];
};

export function getCards(type: DocType, locale: Locale) {
    switch(type) {
        case "project":
            return PROJECTS(locale);
        case "api":
            return APIS(locale);
        case "module":
            return MODULES(locale);
        case "experiment":
            return EXPERIMENTS(locale);
    };
};
