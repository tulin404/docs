import { CardContent, DocType } from "@/types/docs";
import { Locale } from "@/types/props";
import { getDocNumbers } from "./getDocNumbers";

// GETS THE CARDS (/[locale]) CONTENT
export function getStartCards(type: DocType, locale: Locale): CardContent {
    function getAllLangs() {
        const numbers = getDocNumbers();

        switch(type) {
            case "project":
                return ({
                    pt: {
                        title: "Projetos",
                        desc: "Sistemas e aplicações completas que construí.",
                        count: numbers.projects
                    },
                    en: {
                        title: "Projects",
                        desc: "Full applications and systems that I've built.",
                        count: numbers.projects
                    },
                    es: {
                        title: "Proyectos",
                        desc: "Sistemas y aplicaciones completos que desarrollé.",
                        count: numbers.projects
                    }
                });
            case "api":
                return ({
                    pt: {
                        title: "APIs",
                        desc: "APIs REST e GraphQL que desenvolvi.",
                        count: numbers.apis
                    },
                    en: {
                        title: "APIs",
                        desc: "REST and GraphQL APIs that I've developed.",
                        count: numbers.apis
                    },
                    es: {
                        title: "APIs",
                        desc: "API REST y GraphQL que desarrollé.",
                        count: numbers.apis
                    }
                });
            case "module":
                return ({
                    pt: {
                        title: "Módulos",
                        desc: "Pacotes reutilizáveis e utilitários.",
                        count: numbers.modules
                    },
                    en: {
                        title: "Modules",
                        desc: "Reusable packages and utilities.",
                        count: numbers.modules
                    },
                    es: {
                        title: "Módulos",
                        desc: "Paquetes reutilizables y utilitarios.",
                        count: numbers.modules
                    }
                });
            case "experiment":
                return ({
                    pt: {
                        title: "Experimentos",
                        desc: "Pequenos experimentos e tópicos que estou explorando.",
                        count: numbers.experiments
                    },
                    en: {
                        title: "Experiments",
                        desc: "Small experiments and topics that I'm exploring.",
                        count: numbers.experiments
                    },
                    es: {
                        title: "Experimentos",
                        desc: "Pequeños experimentos y temas que estoy explorando.",
                        count: numbers.experiments
                    }
                });
        };
    };

    return getAllLangs()[locale];
};
