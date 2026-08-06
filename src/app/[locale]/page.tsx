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
        <div></div>
    )
};