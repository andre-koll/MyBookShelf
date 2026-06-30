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
export type Shelfs = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    name: string
}

export const columns: ColumnDef<Shelfs>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
        return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "user.name",
        header: ({ column }) => {
        return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Owner
                <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
{
    id: "actions",
    cell: ({ row }) => {
      const shelfs = row.original
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
                onClick={() => navigator.clipboard.writeText(shelfs.id)}
            >
                Copy shelfs ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                onClick={() => router.push(`/dashboard/${shelfs.id}/shelfs/edit`)}
            >
                Edit shelf
            </DropdownMenuItem>
            <DropdownMenuItem>
                Delete shelf
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

// `/dashboard/${shelfs.id}/shelfs/edit`
// onClick={() => router.push(`/dashboard/${shelfs.id}/shelfs/edit`)}
