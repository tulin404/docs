import { StartContent } from "@/types/docs";
import { Locale } from "@/types/props";

export function getStart(locale: Locale): StartContent {
    switch(locale) {
        case "pt":
            return ({
                keywords: ["Sistemas", "APIs", "Experimentos", "Soluções", "Implementações"],
                hero: "que construi, documentado.",
                desc: "Projetos, módulos, protótipos e mais."
            });
        case "en":
            return ({
                keywords: ["Systems", "APIs", "Experiments", "Solutions", "Implementations"],
                hero: "that I've built, documented.",
                desc: "Projects, modules, prototypes and more."
            });
        case "es":
            return ({
                keywords: ["Sistemas", "APIs", "Experimentos", "Soluciones", "Implementaciones"],
                hero: "que construí, documentado.",
                desc: "Proyectos, módulos, prototipos y más."
            })
    };
};
