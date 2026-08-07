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
        <nav className="bg-background border-b-2 border-border">
            {/* NAV LEFT */}
            <div className="flex">
                <div>
                    <Link
                        href={`/${locale}`}
                    >
                        <Image
                            src="/logo-light.webp"
                            className="logo-light"
                            width={72}
                            height={72}
                            alt="Logo"
                        />
                    </Link>
                    <Link
                        href={`/${locale}`}
                    >
                        <Image
                            src="/logo-dark.webp"
                            className="logo-dark"
                            width={72}
                            height={72}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <Link
                    href={`/${locale}/docs`}
                    className="text-lg text-text font-primary"
                >
                    Docs
                </Link>
            </div>

        </nav>
    );
};
