import type { Locale } from "@/types/props";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { GitHub } from "@/components/ui/GitHub";
import { ChangeLang } from "./components/ChangeLang";
import { ChangeTheme } from "./components/ChangeTheme";

export function NavBar({
    locale,
} : {
    locale: Locale,
}) {
    return (
        <nav className="fixed flex justify-between w-full bg-background px-12 py-4 transition-colors duration-200">
            {/* NAV LEFT */}
            <div className="flex items-center gap-10">
                <Logo locale={locale} />
                <Link
                    href={`/${locale}/docs`}
                    className={`
                        relative text-text font-medium
                        dark:after:absolute dark:after:-inset-2 dark:after:-z-10 dark:after:rounded-full dark:after:bg-text/20 dark:after:blur-lg dark:after:opacity-0 dark:hover:after:opacity-100 dark:after:transition-opacity dark:after:duration-400 dark:after:delay-50
                        `}
                >
                    Docs
                </Link>
            </div>

            {/* NAV RIGHT */}
            <div className="flex items-center gap-6">
                <ChangeLang locale={locale} />
                <ChangeTheme />
                <GitHub />
            </div>
        </nav>
    );
};
