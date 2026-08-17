import { getCards } from "@/lib/content/getCards";
import { DocType } from "@/types/docs";
import { Locale } from "@/types/props";
import { Layers, Braces, Box, FlaskConical } from "lucide-react";
import Link from "next/link";

export function Card({
    type,
    locale
}: {
    type: DocType,
    locale: Locale
}) {
    const content = getCards(type, locale)
    
    function getIcon() {
        switch(type) {
            case "project":
                return <Layers size={36} className="text-text" />
            case "api":
                return <Braces size={36} className="text-text" />
            case "module":
                return <Box size={36} className="text-text" />
            case "experiment":
                return <FlaskConical size={36} className="text-text" />
        };
    };

    return (
        <Link
            href=""
            className="group p-5 border-2 border-border rounded-lg bg-linear-to-t from-background to-text-disabled/10 hover:border-border-hover transition-colors duration-200 hover:cursor-pointer"
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    {getIcon()}
                    <span className="rounded-md text-text border-2 border-border px-2 py-0.5 group-hover:border-border-hover transition-colors duration-200">{content.count}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-text text-2xl tracking-wide">{content.title}</h2>
                    <span className="text-text-muted">{content.desc}</span>
                </div>
            </div>
        </Link>
    );
};