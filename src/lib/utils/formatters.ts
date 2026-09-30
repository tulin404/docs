import { DocType } from "@/types/docs";
import { Locale } from "@/types/props";

export function localeToCountry(locale: Locale) {
    switch(locale) {
        case "pt": return "BR"
        case "en": return "US"
        case "es": return "ES"
    };
};

export function formatDocType(type: DocType) {
    switch(type) {
        case "project":
        case "experiment":
        case "module":
            return type.charAt(0).toUpperCase() + type.slice(1);
        case "api":
            return "API";
    };
};

export function formatLastUpdated(isoDate: string) {
    return new Intl.DateTimeFormat("en-GB", {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(new Date(isoDate));
};
