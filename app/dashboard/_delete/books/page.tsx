import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, PlusCircle, BookOpenText } from "lucide-react";
import Link from "next/link";
import prisma from '@/lib/prisma'
import { getSession } from "@/lib/auth-client";

// import prisma from "@/lib/prisma"

// const session = await auth.api.getSession({ headers: c.req.raw.headers });
// const session = await getSession({ req });

// if (!session) {
//   res.statusCode = 403;
//   // return { props: { drafts: [] } };
// }
// console.log('session', session);

// const user = session?.user;
// console.log("User: ", user);


const postedByID = 'rqnncbSoKaFCJLxFa2mi9imrTUyciziI';

// const assets = await prisma.asset.findMany()
const assets = await prisma.asset.findMany({
  where: { postedById: postedByID },
  orderBy: {
    postedAt: "desc",
  },
  take: 10,
});
const shelfs = await prisma.shelf.findMany()

console.log(assets)
console.log(shelfs)
// console.log(user)

export default function Books() {
  return (
    <>
    <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="#">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Book</span>
          </Link>
        </Button>
    </div>

    <Card className="mt-5">
      <CardHeader>
        <CardTitle>Books</CardTitle>
        <CardDescription>Manage your books and view their sales performance</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Shelf</TableHead>
              <TableHead className="text-end">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
        {assets.map((asset)=>(
            <TableRow key={asset.id}>
              <TableCell>
                <BookOpenText className="h-16 w-16" />
              </TableCell>
              <TableCell key={asset.title}>{asset.title}</TableCell>
              <TableCell key={asset.author}>{asset.author}</TableCell>
              <TableCell key={asset.type}>{asset.type}</TableCell>
              <TableCell key={asset.shelf}>{asset.shelf}</TableCell>
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
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
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