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
                        title: "",
                        desc: "",
                        count: PROJECTS.length
                    }
                });
            case "api":
                return ({
                    pt: {
                        title: "Projetos",
                        desc: "Sistemas e aplicações completas que construí.",
                        count: APIS.length
                    },
                    en: {
                        title: "Projects",
                        desc: "Full applications and systems that I've built.",
                        count: APIS.length
                    },
                    es: {
                        title: "",
                        desc: "",
                        count: APIS.length
                    }
                });
            case "module":
                return ({
                    pt: {
                        title: "Projetos",
                        desc: "Sistemas e aplicações completas que construí.",
                        count: MODULES.length
                    },
                    en: {
                        title: "Projects",
                        desc: "Full applications and systems that I've built.",
                        count: MODULES.length
                    },
                    es: {
                        title: "",
                        desc: "",
                        count: MODULES.length
                    }
                });
            case "experiment":
                return ({
                    pt: {
                        title: "Projetos",
                        desc: "Sistemas e aplicações completas que construí.",
                        count: MODULES.length
                    },
                    en: {
                        title: "Projects",
                        desc: "Full applications and systems that I've built.",
                        count: MODULES.length
                    },
                    es: {
                        title: "",
                        desc: "",
                        count: MODULES.length
                    }
                });
        };
    };

    return getAllLangs()[locale];
};