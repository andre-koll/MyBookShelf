"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";

// This type is used to define the shape of our data.
export type Assets = {
    id: string
    title: string
    author: string
    status: "pending" | "processing" | "success" | "failed"
    shelf: string
}

export const columns: ColumnDef<Assets>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => {
        return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Title
                <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "author",
        header: ({ column }) => {
        return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Author
                <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "shelf.name",
        header: ({ column }) => {
        return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Shelf
                <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
{
    id: "actions",
    cell: ({ row }) => {
      const assets = row.original
        const router = useRouter();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(assets.id)}
            >
                Copy assets ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                onClick={() => router.push(`/dashboard/${assets.id}/assets/edit`)}
            >
                Edit asset
            </DropdownMenuItem>
            <DropdownMenuItem>
                Delete asset
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

// `/dashboard/${assets.id}/assets/edit`
// onClick={() => router.push(`/dashboard/${assets.id}/assets/edit`)}
