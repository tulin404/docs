import { Card } from "@/components/home/Card";
import { GitHub } from "@/lib/content/github";
import { getMainHero } from "@/lib/content/hero";
import { translateTypes } from "@/lib/utils/translateType";
import { DocType } from "@/types/docs";
import { Params } from "@/types/props";

export default async function Page({ params }: { params: Params }) {
    const { locale, type } = await params;
    const cards = await GitHub.getDocsByType(locale, type.slice(0, -1) as DocType);

    const content = getMainHero(locale, type);

    // PADDING TOP BECAUSE OF NAVBAR
    return (
        <main className="min-h-dvh w-dvw flex flex-col justify-center gap-12 px-12 sm:px-24 md:px-36 pt-24 pb-8 sm:pb-0 sm:pt-20">
            <div className="flex flex-col gap-4">
                <h1 className="text-text text-5xl">{content.type.charAt(0).toUpperCase() + content.type.slice(1)}</h1>
                <span className="text-text-muted">{content.sub}</span>
            </div>
            <div className="w-full flex justify-center pb-24">
                <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {typeof cards !== "string"
                        ?
                        cards.map(card => (
                            <Card
                                key={card.id}
                                locale={locale}
                                content={card}
                            />
                        ))
                        :
                        <span className="text-text">{cards}</span>
                    }
                </div>
            </div>
            <div className="flex self-center items-center gap-4">
                <span className="w-8 bg-text-muted h-0.5"></span>
                <span className="text-text-muted">{content.footer}</span>
                <span className="w-8 bg-text-muted h-0.5"></span>
            </div>
        </main>
    );
};
