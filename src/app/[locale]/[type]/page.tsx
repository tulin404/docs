import { GitHub } from "@/lib/content/github";
import { DocType } from "@/types/docs";
import { Params } from "@/types/props";

export default async function Page({ params }: { params: Params }) {
    const { locale, type } = await params;
    const content = await GitHub.getDocsByType(locale, type.slice(0, -1) as DocType);
    console.log(content);

    return (
        <main className="h-dvh w-dvw">

        </main>
    );
};
