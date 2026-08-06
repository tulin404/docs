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
            <div className="w-10 bg-surface">Nav</div>
            <div className="w-10 bg-background">Back</div>
        </>
    )
};