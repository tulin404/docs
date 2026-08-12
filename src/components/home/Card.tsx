export function Card({
    type
}: {
    type: "project" | "api" | "module" | "experiment"
}) {
    switch(type) {
        case "project":
            return (
                
            );
        case "api":
        case "module":
        case "experiment":
    };
};