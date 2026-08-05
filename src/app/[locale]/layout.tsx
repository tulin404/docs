import type { Metadata } from "next";
import type { Params } from "@/types/docs";

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

export default async function Layout() {
    return (
        <html
            lang={locale}
        >
        </html>
    )
};