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
            <div className="flex flex-col gap-3">
                <h1 className="text-text">
                    <WordSlider content={content} />
                    <span className="text-2xl">{content.hero}</span>
                </h1>
                <span className="text-text-muted text-lg">{content.desc}</span>
            </div>
            <div className="flex justify-between gap-10">
                {DOCTYPES.map(type =>
                    <Card key={type} type={type} locale={locale} />
                )}
            </div>
            <div className="bg-border/30 h-0.5 " />
            <div className="flex flex-col">
                <h3 className="text-lg text-text font-medium">{content.recent}</h3>
            </div>
        </main>
    )
};
