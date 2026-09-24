import { StartContent } from "@/types/docs";
import { Locale } from "@/types/props";

export function getStart(locale: Locale): StartContent {
    switch(locale) {
        case "pt":
            return ({
                keywords: ["Sistemas", "APIs", "Experimentos", "Soluções", "Implementações"],
                hero: "que construí, documentado.",
                desc: "Projetos, módulos, protótipos e mais.",
                recent: "Atualizados recentemente"
            });
        case "en":
            return ({
                keywords: ["Systems", "APIs", "Experiments", "Solutions", "Implementations"],
                hero: "that I've built, documented.",
                desc: "Projects, modules, prototypes and more.",
                recent: "Recently updated"
            });
        case "es":
            return ({
                keywords: ["Sistemas", "APIs", "Experimentos", "Soluciones", "Implementaciones"],
                hero: "que construí, documentado.",
                desc: "Proyectos, módulos, prototipos y más.",
                recent: "Actualizados recientemente"
            })
    };
};
