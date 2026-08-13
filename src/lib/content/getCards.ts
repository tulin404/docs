import { CardContent, DocType } from "@/types/docs";
import { Locale } from "@/types/props";

export function getCards(type: DocType, locale: Locale): CardContent {
    function getAllLangs() {
        switch(type) {
            case "project":
                return ({
                    pt: {
                        title: "Projetos",
                        desc: "Sistemas e aplicações completas que construí."
                    },
                    en: {
                        title: "Projects",
                        desc: "Full applications and systems that I've built."
                    },
                    es: {
                        title: "",
                        desc: ""
                    }
                });
            case "api":
                return ({
                    pt: {
                        title: "Projetos",
                        desc: "Sistemas e aplicações completas que construí."
                    },
                    en: {
                        title: "Projects",
                        desc: "Full applications and systems that I've built."
                    },
                    es: {
                        title: "",
                        desc: ""
                    }
                });
            case "module":
                return ({
                    pt: {
                        title: "Projetos",
                        desc: "Sistemas e aplicações completas que construí."
                    },
                    en: {
                        title: "Projects",
                        desc: "Full applications and systems that I've built."
                    },
                    es: {
                        title: "",
                        desc: ""
                    }
                });
            case "experiment":
                return ({
                    pt: {
                        title: "Projetos",
                        desc: "Sistemas e aplicações completas que construí."
                    },
                    en: {
                        title: "Projects",
                        desc: "Full applications and systems that I've built."
                    },
                    es: {
                        title: "",
                        desc: ""
                    }
                });
        };
    };

    return getAllLangs()[locale];
};