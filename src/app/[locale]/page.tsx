import { Params } from "@/types/props";

export default async function Page({
    params
} : {
    params: Params
}) {
    const { locale, slug } = await params;

    console.log(locale);
    console.log(slug);

    return (
        <>
            <h1 className="w-10 bg-surface">Nav</h1>
            <div className="w-10 bg-background">Back</div>
        </>
    )
};