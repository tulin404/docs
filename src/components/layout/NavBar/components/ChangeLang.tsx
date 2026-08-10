"use client";

import type { Locale } from "@/types/props";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { localeToCountry } from "@/lib/utils/formatters";
import { LOCALES } from "@/lib/utils/locales";

export function ChangeLang({
    locale
}: {
    locale: Locale
}) {
    const [isSelecting, setIsSelecting] = useState(false);
    const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
    
    return (
        <div className="relative">
            <button
                onClick={() => setIsSelecting(isSelecting => !isSelecting)}
                className="flex items-center gap-3 border-border border-2 text-text px-3 py-1 rounded-md hover:border-border-hover transition-colors duration-200"
            >
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
                    <span className="text-text">
                        {currentLocale.toUpperCase()}
                    </span>
                </div>
                <ChevronDown
                    className={`
                        ${isSelecting
                            ?
                            "rotate-180"
                            :
                            "rotate-0"
                        }
                        size-4 stroke-3 transition-transform duration-300
                    `} />
            </button>

            <div
                className={`
                    ${isSelecting
                        ?
                        "opacity-100 scale-100"
                        :
                        "opacity-0 scale-35"
                    }
                    absolute origin-top flex flex-col gap-1 transition-all duration-300 top-full left-1/2 -translate-x-1/2 w-max mt-2 border-border border-2 px-3 py-2 rounded-md
                    `}
            >
                {
                    LOCALES.filter(locale => locale !== currentLocale).map(locale => 
                        <button
                            key={locale}
                            onClick={
                                () => {
                                    setCurrentLocale(locale);
                                    setIsSelecting(false);
                                }
                            }
                            className="flex gap-2 items-center"
                        >
                            <ReactCountryFlag
                                countryCode={localeToCountry(locale)}
                                svg
                                style={{
                                    width: "18px",
                                    height: "18px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                            <span className="text-text-muted hover:text-text transition-colors duration-200 text-lg">
                                {locale.toUpperCase()}
                            </span>
                        </button>
                    )
                }
            </div>
        </div>
    );
};
