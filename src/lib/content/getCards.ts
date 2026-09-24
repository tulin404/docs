import { CardContent, DocType } from "@/types/docs";
import { Locale } from "@/types/props";
import { PROJECTS, APIS, MODULES, EXPERIMENTS } from "@/constants";

export function getCards(type: DocType, locale: Locale): CardContent {
    function getAllLangs() {
        switch(type) {
            case "project":
                return ({
                    pt: {
                        title: "Projetos",
                        desc: "Sistemas e aplicações completas que construí.",
                        count: PROJECTS.length
                    },
                    en: {
                        title: "Projects",
                        desc: "Full applications and systems that I've built.",
                        count: PROJECTS.length
                    },
                    es: {
                        title: "Proyectos",
                        desc: "Sistemas y aplicaciones completos que desarrollé.",
                        count: PROJECTS.length
                    }
                });
            case "api":
                return ({
                    pt: {
                        title: "APIs",
                        desc: "APIs REST e GraphQL que desenvolvi.",
                        count: APIS.length
                    },
                    en: {
                        title: "APIs",
                        desc: "REST and GraphQL APIs that I've developed.",
                        count: APIS.length
                    },
                    es: {
                        title: "APIs",
                        desc: "API REST y GraphQL que desarrollé.",
                        count: APIS.length
                    }
                });
            case "module":
                return ({
                    pt: {
                        title: "Módulos",
                        desc: "Pacotes reutilizáveis e utilitários.",
                        count: MODULES.length
                    },
                    en: {
                        title: "Modules",
                        desc: "Reusable packages and utilities.",
                        count: MODULES.length
                    },
                    es: {
                        title: "Módulos",
                        desc: "Paquetes reutilizables y utilitarios.",
                        count: MODULES.length
                    }
                });
            case "experiment":
                return ({
                    pt: {
                        title: "Experimentos",
                        desc: "Pequenos experimentos e tópicos que estou explorando.",
                        count: EXPERIMENTS.length
                    },
                    en: {
                        title: "Experiments",
                        desc: "Small experiments and topics that I'm exploring.",
                        count: EXPERIMENTS.length
                    },
                    es: {
                        title: "Experimentos",
                        desc: "Pequeños experimentos y temas que estoy explorando.",
                        count: EXPERIMENTS.length
                    }
                });
        };
    };

    return getAllLangs()[locale];
};
