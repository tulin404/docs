import { Locale } from "@/types/props";

export function localeToCountry(locale: Locale) {
    switch(locale) {
        case "pt": return "BR"
        case "en": return "US"
        case "es": return "ES"
    };
};