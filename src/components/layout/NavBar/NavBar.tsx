import { Locale } from "@/types/props";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export function NavBar({
    locale,
    content
} : {
    locale: Locale,
    content: any // eslint-disable-line
}) {
    return (
        <nav className="bg-background border-b-2 border-border px-12 py-4">
            {/* NAV LEFT */}
            <div className="flex items-center gap-8">
                <Logo locale={locale} />
                <Link
                    href={`/${locale}/docs`}
                    className="text-lg text-text font-primary font-medium"
                >
                    Docs
                </Link>
            </div>

            {/* NAV RIGHT */}

        </nav>
    );
};
