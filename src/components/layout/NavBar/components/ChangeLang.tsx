"use client";

import type { Locale } from "@/types/props";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { localeToCountry } from "@/lib/utils/formatters";

export function ChangeLang({
    locale
}: {
    locale: Locale
}) {
    const [isSelecting, setIsSelecting] = useState(false);
    const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
    
    return (
        <button onClick={() => setIsSelecting(isSelecting => !isSelecting)} className="flex items-center gap-3 border-border border-2 text-text px-3 py-1 rounded-md hover:border-border-hover transition-colors duration-200">
            <div className="flex items-center gap-2">
                <ReactCountryFlag
                    countryCode={localeToCountry(currentLocale)}
                    svg
                    style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                />
                <span>{currentLocale.toUpperCase()}</span>
            </div>
            <ChevronDown className={`
                    ${isSelecting
                        ?
                        "rotate-180"
                        :
                        "rotate-0"
                    }
                    size-4 stroke-3 transition-transform duration-200
                `} />
        </button>
    );
};
