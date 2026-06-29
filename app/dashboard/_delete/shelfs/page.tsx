'use client'

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { useEffect } from "react";

import Shelflist from "../../../components/lists/shelfs"

export default function Shelfs() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen grid place-items-center p-8">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="min-h-screen grid place-items-center p-8">
        <div className="text-center">
          <p>Redirecting to sign in...</p>
        </div>
      </div>
    );
  }

  const { user } = session;

  console.log("shelfs page ", user.id);

  const userData = {
    id: user.id,
    name: user.name
  }

  return (
    <>
    <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="#">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Shelf</span>
          </Link>
        </Button>
    </div>

    <Card className="mt-5">
        <CardHeader className="px-7">
            <CardTitle>Shelfs {user.name}</CardTitle>
            <CardDescription>Your saved shelfs</CardDescription>
        </CardHeader>
        {/* <Shelflist data={userData}/> */}
    </Card>
    </>
)
}