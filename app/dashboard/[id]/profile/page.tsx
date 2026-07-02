// import prisma from "@/app/generated/prisma"
import prisma from "@/lib/prisma"
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProfileForm from "@/components/forms/profile";

export default async function Profile({
    params,
        }: {
            params: Promise<{ id: string }>
        }) {
    // Get user ID from slug
    const { id } = await params
    
    // Get user data from db
    const profile = await prisma.user.findUnique({
        where: { id: id },
    });
    // console.log("profile", profile)

    return (
        <>
        <h1 className="text-sm font-medium mb-2">Profile Information</h1>
        <div className="mt-8 space-y-6">
            <div className="space-y-4">
                <div className="box-border size-80 p-4 rounded-md border border-black/8 dark:border-white/[.145] bg-transparent shadow-md">

                    <ProfileForm data={profile} />

                </div>
            </div>
        </div>
        </>
    )
}