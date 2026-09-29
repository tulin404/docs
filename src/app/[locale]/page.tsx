import { Card } from "@/components/home/Card";
import { WordSlider } from "@/components/home/WordSlider";
import { getStart } from "@/lib/content/getStart";
import { Params } from "@/types/props";
import { DOCTYPES } from "@/constants";
import { getUpdated } from "@/lib/content/github";
import { Icon } from "@/components/ui/Icon";
import { Fragment } from "react/jsx-runtime";
import Link from "next/link";

export default async function Page({
    params
} : {
    params: Params
    }) {
    const { locale } = await params;

    const updated = await getUpdated(locale);
    // const repos = await getRepos();
    const content = getStart(locale);

    console.log(updated);
    // console.log(repos);

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
            <div className="flex flex-col gap-4">
                <h3 className="text-lg text-text font-medium">{content.recent}</h3>
                <div className="flex flex-col gap-2 w-full">
                    {updated?.map(item => (
                        <Fragment key={item.id}>
                            <Link
                                href={`/${item.type}s/${item.repo_name}`}
                                className="flex flex-col gap-2 text-text"
                            >
                                <div className="flex items-center gap-4 px-4">
                                    <Icon type={item.type} size={18} />
                                    <h4 className="text-sm">{item.name}</h4>
                                </div>
                            </Link>
                            <div className="h-0.5 w-full bg-border/30" />
                        </Fragment>
                    ))}
                </div>
            </div>
        </main>
    )
};
