import { Locale } from "@/types/props";
import Image from "next/image";
import Link from "next/link";

export function Logo({
    locale
}: {
    locale: Locale
}) {
    return (
        <Link
            href={`/${locale}`}
            className="relative block size-[58px]"
        >
            <Image
                src="/logo-light.webp"
                className="logo-light absolute inset-0 transition-opacity duration-200"
                width={58}
                height={58}
                alt="Logo"
                priority
            />
            <Image
                src="/logo-dark.webp"
                className="logo-dark absolute inset-0 transition-opacity duration-200"
                width={58}
                height={58}
                alt="Logo"
                priority
            />
        </Link>
    );
};
