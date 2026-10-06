import { DocType, StartContent } from "@/types/docs";
import { Locale } from "@/types/props";
import { translateTypes } from "../utils/translateType";

// GETS THE MAIN PAGE (/[locale]) CONTENT
export function getStartHero(locale: Locale): StartContent {
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
            });
    };
};


export function getMainHero(locale: Locale, docType: string) {
    const translatedTypes = translateTypes(locale);

    function getAllLangs() {
        const year = new Date().getFullYear();

        const switcher = docType.slice(0, -1);
        switch (switcher as DocType) {
            case "project":
                return {
                    pt: {
                        sub: "Projetos completos desenvolvidos do conceito à implementação.",
                        footer: `Desenvolvimento / ${year}`
                    },
                    en: {
                        sub: "Complete projects developed from concept to implementation",
                        footer: `Development / ${year}`
                    },
                    es: {
                        sub: "Proyectos completos desarrollados desde el concepto hasta la implementación.",
                        footer: `Desarrollo / ${year}`
                    }
                };
            case "api":
                return {
                    pt: {
                        sub: "Interfaces e serviços desenvolvidos para integrar aplicações e simplificar o acesso a dados e funcionalidades.",
                        footer: `Integrações / Serviços`
                    },
                    en: {
                        sub: "Interfaces and services developed to integrate applications and simplify access to data and functionality.",
                        footer: `Integrations / Services`
                    },
                    es: {
                        sub: "Interfaces y servicios desarrollados para integrar aplicaciones y simplificar el acceso a datos y funcionalidades.",
                        footer: `Integraciones / Servicios`
                    }
                };
            case "module":
                return {
                    pt: {
                        sub: "Componentes e soluções reutilizáveis desenvolvidos para estruturar aplicações e resolver problemas específicos.",
                        footer: `Componentes / Arquitetura`
                    },
                    en: {
                        sub: "Reusable components and solutions developed to structure applications and solve specific problems.",
                        footer: `Components / Architecture`
                    },
                    es: {
                        sub: "Componentes y soluciones reutilizables desarrollados para estructurar aplicaciones y resolver problemas específicos.",
                        footer: `Componentes / Arquitectura`
                    }
                };
            case "experiment":
                return {
                    pt: {
                        sub: "Ideias, tecnologias e abordagens exploradas para aprender, testar conceitos e descobrir novas possibilidades.",
                        footer: `Exploração / Pesquisa`
                    },
                    en: {
                        sub: "Ideas, technologies, and approaches explored to learn, test concepts, and discover new possibilities.",
                        footer: `Exploration / Research`
                    },
                    es: {
                        sub: "Ideas, tecnologías y enfoques explorados para aprender, probar conceptos y descubrir nuevas posibilidades.",
                        footer: `Exploración / Investigación`
                    }
                };
        };
    };

    return {
        type: translatedTypes[docType as keyof typeof translatedTypes],
        ...getAllLangs()[locale]
    };
};
