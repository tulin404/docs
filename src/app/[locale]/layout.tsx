import "../globals.css";
import type { Metadata } from "next";
import type { Params } from "@/types/docs";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-primary",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-secondary",
});


export async function generateMetadata({
    params
}: {
    params: Params
}): Promise<Metadata> {
    const { locale, slug } = await params;

    switch(locale) {
        case "pt": 
            return {
                title: "Documentação de tulin404",
                description: "Documentação oficial para orientar, referências de APIs, tutoriais e exemplos."
            };
        case "en": 
            return {
                title: "tulin404's docs",
                description: "Official documentation for guides, API references, tutorials, and examples."
            };
        case "es": 
            return {
                title: "Documentación de tulin404",
                description: "Documentación oficial de orientación, referencias de API, tutoriales y ejemplos."
            }
    }
}

export default async function Layout({
    params,
    children
} : {
    params: Params,
    children: ReactNode
}) {
    const { locale, slug } = await params;
    console.log(slug);
    const locales = ["pt", "en", "es"] as const;

    if (!locales.includes(locale)) {
        notFound();
    };
    
    return (
        <html
            lang={locale}
            className={`${inter.variable} ${outfit.variable}`}
        >
            <body>
                {children}
            </body>
        </html>
    )
};