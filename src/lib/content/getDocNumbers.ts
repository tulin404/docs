import { PROJECTS, APIS, MODULES, EXPERIMENTS } from "@/constants";

export function getDocNumbers() {
    return {
        projects: PROJECTS.length,
        apis: APIS.length,
        modules: MODULES.length,
        experiments: EXPERIMENTS.length
    };
};
