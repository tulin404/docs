import { getStart } from "@/lib/content/getStart";
import { Params } from "@/types/props";

export default async function Page({
    params
} : {
    params: Params
}) {
    const { locale } = await params;
    
    const content = getStart(locale);
    
    return (
        <section>
            {}
        </section>
    )
};
