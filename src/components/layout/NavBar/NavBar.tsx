"use client";

import { Locale } from "@/types/props";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { useState, useEffect } from "react";

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
                fixed bg-background border-b-2 px-12 py-4 transition-colors duration-200
            `}>
            {/* NAV LEFT */}
            <div className="flex items-center gap-10">
                <Logo locale={locale} />
                <Link
                    href={`/${locale}/docs`}
                    className="text-text font-primary font-medium"
                >
                    Docs
                </Link>
            </div>

            {/* NAV RIGHT */}
            <div className="flex items-center">
                
            </div>
        </nav>
    );
};
