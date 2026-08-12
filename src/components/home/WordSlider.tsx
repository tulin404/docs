"use client";

import type { StartContent } from "@/types/docs";
import { useState, useEffect } from "react";

export function WordSlider({
    content
}: {
    content: StartContent
}) {
    const { keywords } = content;
    
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current + 1) % keywords.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [keywords]);

    return (
        <div className="relative h-[2em] overflow-hidden py-2">
            {keywords.map((word, i) => {
                const offset = (i - index) * 100;

                return (
                    <span
                        key={word}
                        className="absolute inset-0 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateY(${offset}%)`,
                        }}
                    >
                        {word}
                    </span>
                );
            })}
        </div>
    );
}