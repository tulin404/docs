"use client";

import { Sun, Moon, Laptop } from "lucide-react";
import { useRouter } from "next/navigation";

export function ChangeTheme() {
    const router = useRouter();

    function changeTheme(theme: string) {
        const html = document.documentElement;

        html.classList.add("theme-transition");

        if (theme === "") {
            document.cookie = "theme=; Max-Age=0; path=/";
        } else {
            document.cookie = `theme=${theme}; path=/`;
        };

        html.classList.toggle("dark", theme === "dark");

        setTimeout(() => {
            html.classList.remove("theme-transition");
        }, 300);

        router.refresh();
    };

    return (
        <div className="relative h-9.5 border-2 border-border rounded-full flex items-center justify-between px-2 gap-3 hover:border-border-hover transition-colors duration-200">
            <div className="absolute rounded-full bg-text-disabled/60 aspect-square size-6.5 -translate-y-1/2 top-1/2 right-1"></div>
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
                onClick={() => changeTheme("")}
                className="z-20 text-text isolate"
            >
                <Laptop size="18" />
            </button>
        </div>
    );
};
