export type Locale = "pt" | "en" | "es"

export type Params = Promise<{
    locale: Locale,
    slug: string[]
}>;