import { getCards } from "@/lib/content/getCards";
import { DocType } from "@/types/docs";
import { Locale } from "@/types/props";
import { Layers, Braces, Box, FlaskConical } from "lucide-react";

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
                return <Layers size={28} className="text-text" />
            case "api":
                return <Braces size={28} className="text-text" />
            case "module":
                return <Box size={28} className="text-text" />
            case "experiment":
                return <FlaskConical size={28} className="text-text" />
        };
    };

    return (
        <div className="p-4 border-2 border-border rounded-lg">
            {getIcon()}
            <h2 className="text-text text-2xl">{content.title}</h2>
        </div>
    );
};