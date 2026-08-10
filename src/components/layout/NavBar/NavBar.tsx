"use client";

import type { Locale } from "@/types/props";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { useState, useEffect } from "react";
import { GitHub } from "@/components/ui/GitHub";
import { ChangeLang } from "./components/ChangeLang";

export function NavBar({
    locale,
} : {
    locale: Locale,
}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`
                ${isVisible
                    ?
                    "border-border"
                    :
                    "border-transparent"
                }
                fixed flex justify-between w-full bg-background border-b-2 px-12 py-4 transition-colors duration-200
            `}>
            {/* NAV LEFT */}
            <div className="flex items-center gap-10">
                <Logo locale={locale} />
                <Link
                    href={`/${locale}/docs`}
                    className={`
                        relative text-text font-primary font-medium
                        after:absolute after:-inset-2 after:-z-10 after:rounded-full after:bg-text/20 after:blur-lg after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-400 after:delay-100
                        `}
                >
                    Docs
                </Link>
            </div>

            {/* NAV RIGHT */}
            <div className="flex items-center">
                <ChangeLang locale={locale} />
                <GitHub />
            </div>
        </nav>
    );
};
