import { Card } from "@/components/home/Card";
import { GitHub } from "@/lib/content/github";
import { translateTypes } from "@/lib/utils/translateType";
import { DocType } from "@/types/docs";
import { Params } from "@/types/props";

export default async function Page({ params }: { params: Params }) {
    const { locale, type } = await params;
    const cards = await GitHub.getDocsByType(locale, type.slice(0, -1) as DocType);
    console.log(cards);

    const translatedTypes = translateTypes(locale);
    const docType = translatedTypes[type as keyof typeof translatedTypes];

    // PADDING TOP BECAUSE OF NAVBAR
    return (
        <main className="min-h-dvh w-dvw flex flex-col items-center justify-center gap-10 px-12 sm:px-24 md:px-36 pt-24 pb-8 sm:pb-0 sm:pt-20">
            <h1 className="text-text text-5xl">{docType.charAt(0).toUpperCase() + docType.slice(1)}</h1>
                <div className="w-full flex justify-center">
                    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(320px,510px))] gap-6 place-content-center">
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
        </main>
    );
};
