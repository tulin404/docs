"use client";

import { Locale } from "@/types/props";
import Link from "next/link";
import Image from "next/image";
import logoDark from "/tree-"

export function NavBar({
    locale,
    content
} : {
    locale: Locale,
    content: any // eslint-disable-line
}) {
    return (
        <nav className="bg-surface">
            {/* NAV LEFT */}
            <div className="flex">
                <div>
                    <Image
                        src="/tree-light.png"
                        className="logo-light"
                        width={100}
                        height={100}
                        alt="Logo"
                    />
                    
                    <Image
                        src="/tree-dark.png"
                        className="logo-dark"
                        width={100}
                        height={100}
                        alt="Logo"
                    />
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
