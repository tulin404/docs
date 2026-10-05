export type Locale = "pt" | "en" | "es";

export type Theme = "light" | "dark" | undefined;

export type Params = Promise<{
    locale: Locale,
    type: string,
}>;

export type CardContent = {
    id: number,
    type: string,
    repo_name: string,
    name: string,
    desc: string,
    html_url: string,
    homepage: string,
    updated_at: string
};
