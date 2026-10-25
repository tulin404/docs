import Intro, { metadata as introMetadata } from "@/lib/docs/pt/intro.mdx";
import { Locale } from "@/types/props";
import { createElement } from "react";

const docs = {
    pt: {
        Stormio: {
            content: Intro,
            metadata: introMetadata,
        },
    },
    en: {
        Stormio: {
            content: Intro,
            metadata: introMetadata,
        },
    },
    es: {
        Stormio: {
            content: Intro,
            metadata: introMetadata,
        },
    },
};

export function getDoc(locale: Locale, docName: string) {
    const translated = docs[locale];
    if (!translated) return null;

    const doc = translated[docName as keyof typeof translated];
    if (!doc) return null;

    return {
        content: createElement(doc.content),
        metadata: doc.metadata,
    };
};
