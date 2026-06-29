import prisma from "@/app/generated/prisma"
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
      {/* <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="#">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Edit Profile</span>
          </Link>
        </Button>
      </div> */}

      <h1 className="text-sm font-medium mb-2">Profile Information</h1>
      {/* <h1>{profile!.name}</h1> */}
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