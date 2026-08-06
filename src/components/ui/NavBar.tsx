"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar({
    content
} : {
    content: any, // eslint-disable-line
}) {
    const pathname = usePathname();

    return (
        <Link
            href="/docs"
        >
            Docs
        </Link>
    );
};
