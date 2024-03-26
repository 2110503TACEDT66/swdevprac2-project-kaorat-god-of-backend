import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Update from "./update";

export default async function UpdatePage( {params} : {params : { bid : string}} ) {
    const session = await getServerSession(authOptions);
    if(!session || !session.user.token ) return null;

    return (
        <main>
            <Update token={session.user.token} id={params.bid}/>
        </main>
    )
}