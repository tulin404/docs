import { Params } from "@/types/docs";

export default async function Page({
    params
} : {
    params: Params
}) {
    const { locale, slug } = await params;

    console.log(locale);
    console.log(slug);

    return (
        <div className="text-red-500">Hey</div>
    )
};