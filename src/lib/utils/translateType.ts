import { Locale } from "@/types/props";

export function translateTypes(locale: Locale) {
    switch(locale) {
        case "pt":
            return {
                projects: "projetos",
                apis: "APIs",
                modules: "módulos",
                experiments: "experimentos"
            };
        case "en":
            return {
                projects: "projects",
                apis: "APIs",
                modules: "modules",
                experiments: "experiments"
            };
        case "es":
            return {
                projects: "proyectos",
                apis: "APIs",
                modules: "módulos",
                experiments: "experimentos"
            };
    };


};
