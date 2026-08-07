import { Locale } from "@/types/props";
import Image from "next/image";
import Link from "next/link";

export function Logo({
    locale
}: {
    locale: Locale
}) {
    return (
        <div>
            <Link
                href={`/${locale}`}
            >
                <Image
                    src="/logo-light.webp"
                    className="logo-light"
                    width={58}
                    height={58}
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
    );
};
