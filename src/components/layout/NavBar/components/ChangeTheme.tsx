"use client";

import { Sun, Moon, Laptop } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Theme } from "@/types/props";

export function ChangeTheme({
    initialTheme
}: {
    initialTheme: Theme
}) {
    const router = useRouter();

    function changeTheme(theme: Theme) {
        const html = document.documentElement;

        // REFRESH WILL CLEAN BOTH
        html.classList.add("logo-transition");
        html.classList.add("theme-transition");

        if (!theme) {
            document.cookie = "theme=; Max-Age=0; path=/";
        } else {
            document.cookie = `theme=${theme}; path=/`;
        }

        // STARTS ANIMATION
        html.classList.toggle("dark", theme === "dark");

        router.refresh();
    };

    return (
        <div className="relative h-9.5 border-2 border-border rounded-full flex items-center justify-between px-2 gap-3 hover:border-border-hover transition-colors duration-200">
            <div
                className={`
                    ${
                        initialTheme === "light"
                            ?
                            "left-1"
                            :
                        initialTheme === "dark"
                            ?
                            "left-1/2 -translate-x-1/2"
                            :
                            // THIS EQUALS right-1
                            "left-[calc(100%-1.625rem-0.25rem)]"
                    }
                    absolute rounded-full bg-text-disabled/60 aspect-square size-6.5 -translate-y-1/2 top-1/2 right-1 transition-all duration-200
                `}
            />
            <button
                onClick={() => changeTheme("light")}
                className="z-20 text-text isolate"
            >
                <Sun size="18" />
            </button>
            <button
                onClick={() => changeTheme("dark")}
                className="z-20 text-text isolate"
            >
                <Moon size="18" />
            </button>
            <button
                onClick={() => changeTheme(undefined)}
                className="z-20 text-text isolate"
            >
                <Laptop size="18" />
            </button>
        </div>
    );
};
