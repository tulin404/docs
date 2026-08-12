import { Layers, Braces, Box, FlaskConical } from "lucide-react";

export function Card({
    type
}: {
    type: "project" | "api" | "module" | "experiment"
}) {
    const icon = () => {
        switch(type) {
            case "project":
                return <Layers />
            case "api":
                return <Braces />
            case "module":
                return <Box />
            case "experiment":
                return <FlaskConical />
        };
    };
};