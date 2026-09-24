import { NextResponse } from "next/server";

export async function GET() {
    const username = "tulin404";
    const token = process.env.GITHUB_PAT;

    try {
        const response = await fetch(`https://github.com/${username}/repos?sort=updated`, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${token}`,
            },
            next: { revalidate: 60 }
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: "Error when fetching GitHub data" },
                { status: response.status }
            );
        };

        const data = await response.json();
        return NextResponse.json(data)
    } catch {
        return NextResponse.json(
            { error: "Server internal error" },
            { status: 500 }
        );
    };
};
