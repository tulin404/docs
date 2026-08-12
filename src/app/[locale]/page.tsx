import { WordSlider } from "@/components/home/WordsSlider";
import { getStart } from "@/lib/content/getStart";
import { Params } from "@/types/props";

export default async function Page({
    params
} : {
    params: Params
}) {
    const { locale } = await params;
    
    const content = getStart(locale);
    
    return (
        <section className="h-dvh w-dvw flex flex-col justify-center px-12">
            <h1 className="text-text">
                <WordSlider content={content} />
                <span></span>
            </h1>
        </section>
    )
};
