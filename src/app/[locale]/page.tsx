import { Card } from "@/components/home/Card";
import { WordSlider } from "@/components/home/WordSlider";
import { getStart } from "@/lib/content/getStart";
import { Params } from "@/types/props";
import { DOCTYPES } from "@/constants";

export default async function Page({
    params
} : {
    params: Params
}) {
    const { locale } = await params;

    const content = getStart(locale);

    return (
        <main className="h-dvh w-dvw flex flex-col gap-8 justify-center px-36">
            <div className="flex flex-col gap-4 pb-8">
                <h1 className="text-text">
                    <WordSlider content={content} />
                    <span className="text-2xl">{content.hero}</span>
                </h1>
                <span className="text-text-muted">{content.desc}</span>
            </div>
            <div className="flex">
                {DOCTYPES.map(type => 
                    <Card key={type} type={type} locale={locale} />
                )}
            </div>
        </main>
    )
};
