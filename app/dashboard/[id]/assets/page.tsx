// 'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlusCircle, BookOpenText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { deleteAsset } from "./actions"

import prisma from "@/app/generated/prisma"

export default async function Assets({
  params,
  }: {
    params: Promise<{ id: string }>
  }) {
  // Get asset owner ID from slug
  const { id } = await params
 
  // console.log('asset slug user id ' + id);

  // Get asset data from db
  const assets = await prisma.asset.findMany({
    where: {
      id: id
    },
    select: {
      id: true,
      title: true,
      author: true,
      type: true,
      shelf: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <h1>Your Assets</h1>
      <div className="flex items-center justify-end">
          <Button asChild className="flex items-center gap-x-2">
            <Link key="/dashboard/assets" href={`/dashboard/${id}/assets/add`}>
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Asset</span>
            </Link>
          </Button>
      </div>
      {/* <div className="flex items-center justify-end">
          <Button asChild className="flex items-center gap-x-2">
            <Link key="/dashboard/assets" href={`/dashboard/${id}/assets/google-books`}>
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Google ISBN</span>
            </Link>
          </Button>
      </div> */}
    <Card className="mt-5">
      <CardHeader>
        <CardTitle>Assets</CardTitle>
        <CardDescription>Manage your assets</CardDescription>
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
              <TableCell key={asset.shelf.name}>{asset.shelf.name}</TableCell>
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
                    <Link href={`/dashboard/${asset.id}/assets/edit`}>
                      <DropdownMenuItem>
                        Edit
                      </DropdownMenuItem>
                    </Link>
                    <Link href={`/dashboard/${asset.id}/assets/delete`}>
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