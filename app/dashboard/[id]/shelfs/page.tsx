import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlusCircle, Library } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import prisma from "@/app/generated/prisma"

export default async function Shelfs({
  params,
  }: {
    params: Promise<{ id: string }>
  }) {
  // Get shelf owner ID from slug
  const { id } = await params
 
  // console.log('shelf slug user id ' + id);

  // Get shelf data from db
  const shelfs = await prisma.shelf.findMany({
    where: { userId: id },
  });
  // console.log("shelfs", shelfs)

  // if (shelfs.length == 0) {
  //   console.log('no shelfs');
  //     return <div>No shelfs found, please add a shelf</div>;
  // }

  // Get shelf owner name from db
  const user = await prisma.user.findFirst({
    select: {
      name: true,
    },
    where: { id: id },
  });
  // console.log("user ", user)



  return (
    <>
      <h1>Your Shelfs</h1>
      <div className="flex items-center justify-end">
          <Button asChild className="flex items-center gap-x-2">
            <Link key="/dashboard/shelfs" href={`/dashboard/${id}/shelfs/add`}>
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Shelf</span>
            </Link>
          </Button>
      </div>
    <Card className="mt-5">
      <CardHeader>
        <CardTitle>Shelfs</CardTitle>
        <CardDescription>Manage your shelfs</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead className="text-end">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
        {shelfs.map((shelf)=>(
            <TableRow key={shelf.id}>
              <TableCell>
                <Library className="h-16 w-16" />
              </TableCell>
              <TableCell key={shelf.name}>{shelf.name}</TableCell>
              <TableCell key={user?.name}>{user?.name}</TableCell>
              <TableCell className="text-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={`/dashboard/${shelf.id}/shelfs/edit`}>
                      <DropdownMenuItem>
                        Edit
                      </DropdownMenuItem>
                    </Link>
                    <Link href={`/dashboard/${shelf.id}/shelfs/delete`}>
                      <DropdownMenuItem>
                        Delete
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
        ))}

          </TableBody>
        </Table>
      </CardContent>
    </Card>
    </>
  )
}