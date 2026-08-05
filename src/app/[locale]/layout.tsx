import type { Metadata } from "next";
import type { Params } from "@/types/docs";

export async function generateMetadata({
    params
}: {
    params: Params
}): Promise<Metadata> {
    const { locale, slug } = await params;
}

export default function Home() {
    return (
        <html></html>
    )
};