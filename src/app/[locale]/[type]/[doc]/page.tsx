import { getDoc } from "@/lib/content/getDoc";
import { Params } from "@/types/props";
import { notFound } from "next/navigation";
import { Locale } from "@/types/props";

import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{
        locale: Locale;
        type: string;
        doc: string;
    }>;
}): Promise<Metadata> {
    const { locale, doc } = await params;
    const document = getDoc(locale, doc);

    if (!document) return {};

    return {
        title: document.metadata.title,
        description: document.metadata.description,
    };
}

export default async function Page({ params }: { params: Params }) {
    const { locale, doc } = await params;
    const document = getDoc(locale, doc);

    if (!document) notFound();

    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            {document.content}
        </main>
    );
};
