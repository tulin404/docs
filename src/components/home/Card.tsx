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
                return <Layers className="text-text" />
            case "api":
                return <Braces className="text-text" />
            case "module":
                return <Box className="text-text" />
            case "experiment":
                return <FlaskConical className="text-text" />
        };
    };

    return (
        <div className="p-4 border-2 border-border rounded-lg">
            {getIcon()}
            <h2>{}</h2>
        </div>
    );
};