import { Locale } from "@/types/props";
import Link from "next/link";
import Image from "next/image";

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
                <div>
                    <Link
                        href={`/${locale}`}
                    >
                        <Image
                            src="/logo-light.webp"
                            className="logo-light"
                            width={68}
                            height={68}
                            alt="Logo"
                            priority
                        />
                    </Link>
                    <Link
                        href={`/${locale}`}
                    >
                        <Image
                            src="/logo-dark.webp"
                            className="logo-dark"
                            width={58}
                            height={58}
                            alt="Logo"
                            priority
                        />
                    </Link>
                </div>
                <Link
                    href={`/${locale}/docs`}
                    className="text-lg text-text font-primary font-medium"
                >
                    Docs
                </Link>
            </div>

        </nav>
    );
};
