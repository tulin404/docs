import { PROJECTS, APIS, MODULES, EXPERIMENTS } from "@/constants";

export function getDocCounts() {
    // LOCALE DOENS'T MATTER SINCE IT RETURNS JUST THE NUMBERS
    return {
        projects: PROJECTS("en").length,
        apis: APIS("en").length,
        modules: MODULES("en").length,
        experiments: EXPERIMENTS("en").length
    };
};
