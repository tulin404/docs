import "../globals.css";
import type { Metadata } from "next";
import type { Params } from "@/types/props";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { NavBar } from "@/components/layout/NavBar/NavBar";

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-primary",
});


export async function generateMetadata({
    params
}: {
    params: Params
}): Promise<Metadata> {
    const { locale } = await params;

    const base: Metadata = {
        title: "tulin404's docs",
        icons: {
            icon: "/logo-dark.webp"
        }
    };

    switch(locale) {
        case "pt":
            return {
                ...base,
                description: "Documentação oficial para orientar, referências de APIs, tutoriais e exemplos."
            };
        case "en":
            return {
                ...base,
                description: "Official documentation for guides, API references, tutorials, and examples."
            };
        case "es":
            return {
                ...base,
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
    const { locale } = await params;
    const locales = ["pt", "en", "es"] as const;

    if (!locales.includes(locale)) {
        notFound();
    };

    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")?.value ?? undefined;

    return (
        <html
            lang={locale === "pt" ? "pt-BR" : locale}
            className={`${geistMono.variable} ${theme} bg-background`}
        >
            <body>
                <NavBar locale={locale} />
                {children}
            </body>
        </html>
    )
};
