import { StartContent } from "@/types/docs";
import { Locale } from "@/types/props";

export function getStart(locale: Locale): StartContent {
    switch(locale) {
        case "pt":
            return ({
                keywords: ["Sistemas", "APIs", "Experimentos", "Soluções", "Implementações"],
                hero: " que construi, documentado.",
            });
        case "en":
        case "es":
    };
};
