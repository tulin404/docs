"use client";

import type { Locale } from "@/types/props";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function ChangeLang({
    locale
}: {
    locale: Locale
}) {
    const [isSelecting, setIsSelecting] = useState(false);
    const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
    
    return (
        <button onClick={() => setIsSelecting(isSelecting => !isSelecting)} className="flex items-center gap-3 border-border border-2 text-text px-3 py-1 rounded-md">
            {currentLocale.toUpperCase()}
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
