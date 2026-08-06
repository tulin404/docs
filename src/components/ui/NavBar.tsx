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
                    <Image
                        src="/logo-light.png"
                        className="logo-light"
                        width={72}
                        height={72}
                        alt="Logo"
                        loading="eager"
                        
                    />
                    
                    <Image
                        src="/logo-dark.png"
                        className="logo-dark"
                        width={72}
                        height={72}
                        alt="Logo"
                        loading="eager"
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
