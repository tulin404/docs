import { Params } from "@/types/props";

export default async function Page({ params }: { params: Params }) {
    const { locale, type } = await params;

    return (
        <main className="h-dvh w-dvw">

        </main>
    );
};
