import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function getUserId() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if(!session){
        redirect("/");
    }

    // get user id from session
    const userId = session?.user.id;

    return userId;
}