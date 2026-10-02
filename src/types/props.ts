import { DocType } from "./docs";

export type Locale = "pt" | "en" | "es";

export type Theme = "light" | "dark" | undefined;

export type Params = Promise<{
    locale: Locale,
    type: DocType,
}>;
