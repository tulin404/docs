import type { Locale, Theme } from "@/types/props";
import { cookies } from "next/headers";
import { Logo } from "@/components/layout/Logo";
import { GitHub } from "@/components/ui/GitHub";
import { ChangeLang } from "./components/ChangeLang";
import { ChangeTheme } from "./components/ChangeTheme";

export async function NavBar({
    locale,
} : {
    locale: Locale,
}) {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")?.value as Theme ?? undefined;

    return (
        <nav className="fixed flex justify-between w-full bg-background px-4 sm:px-12 py-4 transition-colors duration-200 z-20">
            {/* NAV LEFT */}
            <Logo locale={locale} />

            {/* NAV RIGHT */}
            <div className="flex items-center gap-6">
                <ChangeLang locale={locale} />
                <ChangeTheme initialTheme={theme} />
                <GitHub
                    size={30}
                    url="https://github.com/tulin404"
                />
            </div>
        </nav>
    );
};
