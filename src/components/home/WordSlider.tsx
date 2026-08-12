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
        <div
            className={`
                relative h-[3.75em] overflow-hidden
                before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-[0.5em] before:bg-linear-to-b before:from-background before:to-transparent
                after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-[0.5em] after:bg-linear-to-t after:from-background after:to-transparent
            `}
        >
            {keywords.map((word, i) => {
                const offset = (i - index) * 100;

                return (
                    <span
                        key={word}
                        className="absolute inset-0 transition-transform duration-500 ease-in-out text-5xl mt-1"
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
