import { Card } from "@/components/home/Card";
import { WordSlider } from "@/components/home/WordSlider";
import { getStart } from "@/lib/content/getStart";
import { Params } from "@/types/props";
import { DOCTYPES } from "@/constants";
import { getUpdated } from "@/lib/content/github";
import { Icon } from "@/components/ui/Icon";
import { Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { formatLastUpdated } from "@/lib/utils/formatters";
import { MoveRight } from "lucide-react";
import { translateTypes } from "@/lib/utils/translateType";
import { getDocNumbers } from "@/lib/content/getDocNumbers";

export default async function Page({ params }: { params: Params }) {
    const { locale } = await params;

    const updated = await getUpdated(locale);
    // const repos = await getRepos();
    const content = getStart(locale);
    const numbers = getDocNumbers();
    const translatedTypes = translateTypes(locale);

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
                {DOCTYPES.map((type) => (
                    <Card key={type} type={type} locale={locale} />
                ))}
            </div>
            <div className="bg-border/30 h-0.5 " />
            <div className="flex flex-col gap-4">
                <h3 className="text-lg text-text font-medium">
                    {content.recent}
                </h3>
                <div className="flex flex-col gap-2.5 w-full">
                    {typeof updated !== "string"
                        ?
                        updated?.map((item) => (
                            <Fragment key={item.id}>
                                <Link
                                    href={`/${item.type}s/${item.repo_name}`}
                                    className="group flex justify-between text-sm px-4"
                                >
                                    <div className="flex items-center text-text gap-4">
                                        <Icon type={item.type} size={20} />
                                        <h4>{item.name}</h4>
                                    </div>
                                    <span className="hidden sm:block absolute left-1/2 -translate-x-8 text-text-muted group-hover:text-text transition-colors duration-200">
                                        {translatedTypes[`${item.type}s`]
                                            .slice(0, -1)
                                            .charAt(0)
                                            .toUpperCase() +
                                            translatedTypes[`${item.type}s`].slice(1,-1,)
                                        }
                                    </span>
                                    <div className="flex gap-16">
                                        <span className="text-text-muted group-hover:text-text transition-colors duration-200">
                                            {formatLastUpdated(locale, item.updated_at)}
                                        </span>
                                        <MoveRight
                                            size={20}
                                            className="text-text-disabled group-hover:text-text group-hover:translate-x-2 transition-all duration-200"
                                        />
                                    </div>
                                </Link>
                                <div className="h-0.5 w-full bg-border/30" />
                            </Fragment>
                        ))
                        :
                        <div className="flex items-center justify-center w-full">
                            <span className="flex items-center justify-center h-32 text-text text-lg">{updated}</span>
                        </div>

                    }
                </div>
            </div>
            <div className="flex w-full text-text-muted items-center justify-center gap-4">
                <span className="hover:text-text transition-colors duration-200">
                    {numbers.projects <= 1
                        ?
                        `${numbers.projects} ${translatedTypes.projects.slice(0, -1)}`
                        :
                        `${numbers.projects} ${translatedTypes.projects}`
                    }
                </span>
                <span>•</span>
                <span className="hover:text-text transition-colors duration-200">
                    {numbers.apis <= 1
                        ?
                        `${numbers.apis} ${translatedTypes.apis.slice(0, -1)}`
                        :
                        `${numbers.apis} ${translatedTypes.apis}`
                    }
                </span>
                <span>•</span>
                <span className="hover:text-text transition-colors duration-200">
                    {numbers.modules <= 1
                        ?
                        `${numbers.modules} ${translatedTypes.modules.slice(0, -1)}`
                        :
                        `${numbers.modules} ${translatedTypes.modules}`
                    }
                </span>
                <span>•</span>
                <span className="hover:text-text transition-colors duration-200">
                    {numbers.experiments <= 1
                        ?
                        `${numbers.experiments} ${translatedTypes.experiments.slice(0, -1)}`
                        :
                        `${numbers.experiments} ${translatedTypes.experiments}`
                    }
                </span>
            </div>
        </main>
    );
}
