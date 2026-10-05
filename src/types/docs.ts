export type DocType =
    "project" | "api" | "module" | "experiment";

export type StartContent = {
    keywords: string[],
    hero: string,
    desc: string,
    recent: string
};

export type StartCardContent = {
    title: string,
    desc: string,
};

export type StartCard = StartCardContent & {
    count: number
};
