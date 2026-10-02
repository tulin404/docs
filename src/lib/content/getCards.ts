import { APIS, EXPERIMENTS, MODULES, PROJECTS } from "@/constants";
import { DocType } from "@/types/docs";
import { Locale } from "@/types/props";

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
