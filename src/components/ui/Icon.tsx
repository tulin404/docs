import { DocType } from "@/types/docs"
import { Layers, Braces, Box, FlaskConical } from "lucide-react"

export function Icon({
    type,
    size
}: {
    type: DocType,
    size: number
}) {
    switch(type) {
        case "project":
            return <Layers size={size} className="text-text" />
        case "api":
            return <Braces size={size} className="text-text" />
        case "module":
            return <Box size={size} className="text-text" />
        case "experiment":
            return <FlaskConical size={size} className="text-text" />
    };
};
