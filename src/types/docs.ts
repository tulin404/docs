export type DocType = 
    "project" | "api" | "module" | "experiment";
    
export type StartContent = {
    keywords: string[],
    hero: string,
    desc: string
};

export type CardContent = {
    title: string,
    desc: string,
    count: number
};
