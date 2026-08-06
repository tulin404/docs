"use client";

import { Locale } from "@/types/props";
import Link from "next/link";

export function NavBar({
    locale,
    content
} : {
    locale: Locale,
    content: any // eslint-disable-line
}) {
    return (
        <Link
            href={`/${locale}/docs`}
            className="text-xl"
        >
            Docs
        </Link>
    );
};
