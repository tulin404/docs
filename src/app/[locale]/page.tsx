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
    let data;

    const username = "tulin404";
    const token = process.env.GITHUB_PAT;

    // IF THE FETCH FAILS, DATA IS BEING SET TO NULL FOR DISPLAYING CUSTOM MESSAGE TO USER
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${token}`,
            },
            next: { revalidate: 60 }
        });

        if (!response.ok) {
            console.log("[GITHUB API RESPONSE ERROR]: ", response.status);
            data = null;
        };

        data = await response.json();
    } catch (error) {
        console.log("[GITHUB API FETCH ERROR]: ", error);
        data = null;
    };

    console.log(data)

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
                <div>

                </div>
            </div>
        </main>
    )
};
